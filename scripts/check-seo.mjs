import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import astroConfig from '../astro.config.mjs';

let site;
try {
  site = new URL(astroConfig.site);
} catch (error) {
  throw new Error('Invalid configured site URL', { cause: error });
}
function png(path, width, height) {
  const bytes = readFileSync(path);
  assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', `${path}: PNG signature`);
  assert.equal(bytes.toString('ascii', 12, 16), 'IHDR', `${path}: PNG header`);
  assert.equal(bytes.readUInt32BE(16), width, `${path}: width`);
  assert.equal(bytes.readUInt32BE(20), height, `${path}: height`);
}
png('public/favicon.png', 64, 64);
png('public/og-image.png', 1200, 630);

const routes = ['', ...readdirSync('src/pages').filter((name) => name.startsWith('articulo-') && name.endsWith('.astro')).map((name) => name.slice(0, -6))];

function attribute(tag, key) {
  return tag.match(new RegExp(`\\b${key}="([^"]*)"`))?.[1];
}

const descriptions = new Set();

for (const route of routes) {
  const file = join('dist', route, 'index.html');
  const html = readFileSync(file, 'utf8');
  const headingLevels = [...html.matchAll(/<h([1-6])\b[^>]*>/gi)].map(([, level]) => Number(level));
  assert.equal(headingLevels.filter((level) => level === 1).length, 1, `${file}: expected one H1`);
  assert.equal(headingLevels[0], 1, `${file}: first heading must be H1`);
  for (let i = 1; i < headingLevels.length; i++) {
    assert.ok(headingLevels[i] <= headingLevels[i - 1] + 1, `${file}: H${headingLevels[i]} skips a heading level after H${headingLevels[i - 1]}`);
  }
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1];
  assert.ok(head, `${file}: head missing`);
  const tags = [...head.matchAll(/<(?:meta|link)\b[^>]*>/gi)].map(([tag]) => tag);
  const matching = (key, value) => tags.filter((tag) => attribute(tag, key) === value);
  const one = (key, value) => {
    const found = matching(key, value);
    assert.equal(found.length, 1, `${file}: expected one ${key}=${value}`);
    return found[0];
  };
  const expected = new URL(route ? `${route}/` : '', site).href;
  assert.equal(attribute(one('rel', 'canonical'), 'href'), expected, `${file}: canonical`);
  assert.equal(attribute(one('property', 'og:url'), 'content'), expected, `${file}: og:url`);
  const title = head.match(/<title>([^<]+)<\/title>/gi) ?? [];
  assert.equal(title.length, 1, `${file}: expected one title`);
  const description = attribute(one('name', 'description'), 'content');
  assert.ok(description?.trim(), `${file}: empty description`);
  assert.ok(!descriptions.has(description), `${file}: duplicate description`);
  descriptions.add(description);
  assert.equal(attribute(one('property', 'og:title'), 'content'), title[0].slice(7, -8), `${file}: og:title`);
  assert.equal(attribute(one('name', 'twitter:title'), 'content'), title[0].slice(7, -8), `${file}: twitter:title`);
  assert.equal(attribute(one('property', 'og:description'), 'content'), description, `${file}: og:description`);
  assert.equal(attribute(one('name', 'twitter:description'), 'content'), description, `${file}: twitter:description`);
  const imageUrl = new URL('og-image.png', site).href;
  assert.equal(attribute(one('rel', 'icon'), 'href'), '/favicon.png', `${file}: favicon`);
  assert.equal(attribute(one('property', 'og:image'), 'content'), imageUrl, `${file}: og:image`);
  assert.equal(attribute(one('name', 'twitter:image'), 'content'), imageUrl, `${file}: twitter:image`);
  const imageAlt = 'José Antonio López Molina — AdTech';
  assert.equal(attribute(one('property', 'og:image:alt'), 'content'), imageAlt, `${file}: OG image alt`);
  assert.equal(attribute(one('name', 'twitter:image:alt'), 'content'), imageAlt, `${file}: Twitter image alt`);
  assert.equal(attribute(one('property', 'og:image:width'), 'content'), '1200', `${file}: image width`);
  assert.equal(attribute(one('property', 'og:image:height'), 'content'), '630', `${file}: image height`);
  assert.equal(attribute(one('name', 'twitter:card'), 'content'), 'summary_large_image', `${file}: card type`);
  const jsonLd = [...head.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  assert.equal(jsonLd.length, 1, `${file}: expected one JSON-LD`);
  let data;
  try {
    data = JSON.parse(jsonLd[0][1]);
  } catch (error) {
    throw new Error(`${file}: invalid JSON-LD`, { cause: error });
  }
  assert.equal(data['@type'], 'WebPage', `${file}: expected route WebPage`);
  assert.equal(data.url, expected, `${file}: JSON-LD URL`);
  assert.equal(data.name, title[0].slice(7, -8), `${file}: JSON-LD name`);
  assert.equal(data.description, description, `${file}: JSON-LD description`);
  if (!route) {
    assert.equal(data.mainEntity?.['@type'], 'Person', `${file}: homepage Person`);
    assert.equal(data.mainEntity.name, 'José Antonio López Molina', `${file}: Person name`);
    assert.equal(data.mainEntity.url, expected, `${file}: Person URL`);
    assert.ok(data.mainEntity.jobTitle?.includes('AdTech'), `${file}: Person role`);
  }

  const breadcrumbs = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
    .map(([, content]) => {
      try {
        return JSON.parse(content);
      } catch (error) {
        throw new Error(`${file}: invalid JSON-LD`, { cause: error });
      }
    })
    .filter((entry) => entry['@type'] === 'BreadcrumbList');
  // The Header Bidding article has an unlinked intermediate crumb, not a canonical page.
  const expectedBreadcrumbs = route && route !== 'articulo-header-bidding' ? 1 : 0;
  assert.equal(breadcrumbs.length, expectedBreadcrumbs, `${file}: valid breadcrumb schema count`);
  if (expectedBreadcrumbs) {
    const list = breadcrumbs[0].itemListElement;
    assert.equal(list.length, 2, `${file}: breadcrumb depth`);
    assert.deepEqual(list.map((item) => item.position), [1, 2], `${file}: breadcrumb positions`);
    assert.equal(list[0].name, 'Portada', `${file}: breadcrumb origin label`);
    assert.equal(list[0].item, site.href, `${file}: breadcrumb origin URL`);
    assert.equal(list[1].item, expected, `${file}: breadcrumb current URL`);
    assert.ok(list[1].name?.trim(), `${file}: breadcrumb current label`);
  }
  console.log(`SEO OK ${file}`);
}

const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
const indexFile = readFileSync('dist/sitemap-index.xml', 'utf8');
assert.deepEqual(locs(indexFile), [new URL('sitemap-0.xml', site).href], 'Sitemap index host');
const sitemapFile = readFileSync('dist/sitemap-0.xml', 'utf8');
const expectedRoutes = routes.map((route) => new URL(route ? `${route}/` : '', site).href);
assert.deepEqual(locs(sitemapFile).sort(), expectedRoutes.sort(), 'Sitemap route and canonical URL set');
assert.match(readFileSync('dist/robots.txt', 'utf8'), new RegExp(`^Sitemap: ${site.href}sitemap-index\\.xml$`, 'm'), 'robots.txt sitemap host');
console.log('SEO OK sitemap and robots.txt');
