# Mobile performance: local baseline

- Route: homepage (`pnpm preview` on localhost), built from current source.
- Method: Chromium Performance navigation trace at 390×844, DPR 2, mobile/touch emulation, Slow 4G network and 4× CPU slowdown. One run; no Vercel deployment, real-user data, or Lighthouse performance score.
- Observed LCP: **1,460 ms**. Element: `/jose.jpeg`, 1265×1265 source pixels, approximately 356×347 CSS pixels when rendered; decoded response body 227,579 bytes. Breakdown: TTFB 3 ms, resource load delay 630 ms, load 602 ms, render delay 225 ms.
- Observed CLS: **0.00**. INP not measured because no representative interaction was recorded. CrUX had no field data for this local URL.
- Chrome insight: LCP image is discoverable from initial HTML and is not lazy-loaded, but has no `fetchpriority="high"`. Insight estimated no LCP savings in this run. Render-blocking stylesheets were noted (site CSS and external Font Awesome); the insight estimated FCP savings but **0 ms LCP savings**. Do not infer a production bottleneck from this local trace.

Next: repeat a mobile trace and check Core Web Vitals on the authorized Vercel deployment. Optimize the confirmed bottleneck only after hosted measurement; do not change image delivery or the shared stylesheet based on this single local run.
