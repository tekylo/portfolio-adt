# Portafolio AdTech de José Antonio López Molina

Portafolio personal sobre experiencia en AdTech y desarrollo full stack. Está construido con Astro: una portada editorial enlaza artículos sobre trayectoria, proyectos y formación. Los formatos publicitarios forman parte de la presentación visual; no demuestran una integración con un servidor de anuncios.

## Qué encontrarás

- Ocho páginas: la portada y siete artículos sobre experiencia, educación, proyectos, cursos, conocimientos, Header Bidding y perfil profesional.
- Una presentación inspirada en un periódico, con anuncios de muestra, navegación y temas claro y oscuro.
- Metadatos compartidos. Su presencia no sustituye la comprobación en navegador ni garantiza resultados en buscadores.

## Inicio rápido

Necesitas Node.js >= 24.15.0 y pnpm >= 11.1.1 (consulta `package.json`).

```bash
pnpm install
pnpm dev
```

El servidor de desarrollo de Astro suele estar en `http://localhost:4321`, salvo que cambie el puerto.

| Comando | Uso |
| --- | --- |
| `pnpm build` | Genera el sitio en `dist/`. |
| `pnpm preview` | Previsualiza localmente el resultado de la compilación. |
| `pnpm astro` | Ejecuta la CLI de Astro. |

`package.json` no define scripts de test, lint ni typecheck. Que `pnpm build` termine correctamente no demuestra que funcionen la navegación, la accesibilidad o el SEO.

## Mapa del proyecto

| Ruta | Contenido |
| --- | --- |
| `src/pages/index.astro` y `src/pages/articulo-*.astro` | Portada y siete artículos. |
| `src/layouts/Layout.astro` | Estructura HTML, metadatos, tema, estilos globales y `ClientRouter` de Astro. |
| `src/components/` y `src/components/ads/` | Componentes de interfaz y formatos publicitarios. |
| `src/data/` y `src/styles/` | Datos de artículos, publicaciones y recomendaciones; estilos compartidos. |
| `public/` | Recursos estáticos, incluido `robots.txt`. `@astrojs/sitemap` genera los XML en `dist/` al compilar. |
| `openspec/changes/` | Propuestas y planes de trabajo; no es código del sitio. |

### Cómo se compone la portada

Las páginas importan `Layout.astro`. La portada combina componentes editoriales y anuncios con datos de `articles.json` y `publications.json`.

- **Lateral de conocimientos:** `src/components/ads/proposals/SkyscraperConcept.astro` usa los colores del sitio y el tema automático. Se muestra en la columna izquierda desplazable a partir de 1900 px; por debajo queda oculto. Su versión anterior permanece en `src/components/ads/archive/TechStackSkinAd.astro`, y el aspecto previo del concepto se recupera con `look="current"`. La portada activa `clean` para quitar etiquetas y números redundantes; basta omitir esa prop para recuperar el aspecto anterior. Comparativas: [claro](odd/previews/skyscraper-v8-clean-context-light.png) y [oscuro](odd/previews/skyscraper-v8-clean-context-dark.png).
- **Anuncios montados:** billboard, contacto, publicación y testimonio comparten una apariencia adaptada al sitio, un cierre × limitado a cada anuncio junto a `ANUNCIO` y un CTA dorado cuadrado. Sus destinos no cambian. Las versiones anteriores están en `src/components/ads/archive/`; la versión intermedia de estilo se conserva en el commit `5d3a05e`. Los formatos publicitarios no utilizados permanecen intactos.
- **Jerarquía lateral:** la portada activa `noEdition` para quitar la etiqueta editorial del lateral limpio y `highlightFirst` para situar el destacado dorado del anuncio de contacto antes del titular blanco, tanto visualmente como en el orden de lectura. Si omites cualquiera de esas props, recuperas su versión anterior. Compara [oscuro anterior](odd/previews/ad-hierarchy-v1-dark.png), [claro anterior](odd/previews/ad-hierarchy-v1-light.png), [oscuro activo](odd/previews/ad-hierarchy-live-dark.png) y [claro activo](odd/previews/ad-hierarchy-live-light.png) a 1900 px.
- **Contacto y CV en pantallas estrechas:** por debajo de 1900 px aparece un acceso compacto al correo tras la navegación, mientras el anuncio lateral de contacto permanece oculto. A partir de 1900 px se invierte esa visibilidad. Hasta 600 px, el billboard del CV muestra nombre, especialidad y descarga; por encima conserva su diseño completo. Las capturas [clara](odd/previews/mobile-cv-v1-comparison-light.png) y [oscura](odd/previews/mobile-cv-v1-comparison-dark.png) comparan ambas versiones antes de la activación.

Los artículos reutilizan navegación, cabecera y migas de pan, además de `articles.json`. Experiencia incorpora `recommendations.json` mediante `TestimonialAd.astro`. Parte del contenido y la composición reside directamente en las páginas: los JSON no son la única fuente.

### Datos y comportamiento

- `src/data/articles.json`: portada y artículos.
- `src/data/publications.json`: publicación destacada en portada.
- `src/data/recommendations.json`: testimonios de Experiencia.

Antes de cambiar datos o presentación, revisa las páginas y componentes que los consumen. El tema utiliza la clase `.dark` y `localStorage` desde `Layout.astro`. Existe `ClientRouter`, pero hay que comprobar la navegación en un navegador antes de dar por garantizadas sus transiciones.

## Metadatos y comprobación SEO

`astro.config.mjs` fija `site` en `https://jalopezmolina.vercel.app`, destino previsto en Vercel. Esta configuración local **no equivale a un despliegue**.

`Layout.astro` genera descripciones por página, canonical y Open Graph para las ocho rutas, además de etiquetas de Twitter, directiva robots y JSON-LD `WebPage`. La portada identifica a José Antonio con `Person` en `mainEntity`; seis artículos publican `BreadcrumbList` cuando sus niveles anteriores tienen enlaces. Header Bidding incluye un nivel intermedio «Publicaciones» sin URL, así que no publica una URL de migas inventada.

El favicon PNG de 64×64 está en `public/favicon.png` y enlazado desde `Layout.astro`. Compruébalo en el servidor real antes de confiar en él. La presencia de metadatos por sí sola tampoco demuestra que el SEO sea correcto.

`@astrojs/sitemap` genera `dist/sitemap-index.xml` y `dist/sitemap-0.xml` con las ocho rutas compiladas. Se retiraron los XML estáticos anteriores de `public/`; `public/robots.txt` apunta al dominio elegido. Después de `pnpm build`, ejecuta `node scripts/check-seo.mjs` para contrastar las URL del sitemap con las canonical y comprobar los metadatos. Generar un sitemap no lo publica ni lo envía a un buscador. La [medición local de rendimiento móvil](odd/reports/mobile-seo-performance.md) recoge observaciones de laboratorio, no Core Web Vitals de usuarios reales ni rendimiento en Vercel.

### Preparar Vercel

1. Conecta este repositorio a tu cuenta de Vercel.
2. Impórtalo como proyecto `jalopezmolina` si el nombre está disponible. Vercel asigna una dirección gratuita `*.vercel.app`: confirma en su panel el hostname real. `https://jalopezmolina.vercel.app` es un destino previsto, no una dirección reservada.
3. Mantén el preset de Astro, usa `pnpm build` como comando de compilación y `dist` como directorio de salida. El proyecto requiere Node.js >= 24.15.0 y pnpm >= 11.1.1. Esta compilación estática no necesita adaptador de servidor.
4. Si el hostname asignado es distinto, actualiza `site` en `astro.config.mjs`, la URL del sitemap en `public/robots.txt` y las URL de Search Console indicadas más abajo **antes de publicar**. Comprueba `pnpm build` y `node scripts/check-seo.mjs` en local. Tras un despliegue autorizado, revisa portada, artículos, canonical, `robots.txt` y `sitemap-index.xml` en el servidor real.

Si añades más adelante un dominio propio, actualiza esas mismas referencias. Esta configuración no crea un proyecto ni realiza un despliegue en Vercel.

### Search Console tras el despliegue

1. Confirma en el sitio publicado el hostname, las canonical, `robots.txt` y el sitemap generado.
2. Añade en Google Search Console la propiedad de prefijo de URL exacta `https://jalopezmolina.vercel.app/` desde la cuenta propietaria. Usa el método y el token que facilite Google (por ejemplo, un archivo HTML o una etiqueta meta); aquí no se presupone ningún token ni la titularidad del sitio.
3. Una vez verificada, envía `https://jalopezmolina.vercel.app/sitemap-index.xml`, inspecciona las ocho URL y sigue la indexación y los Core Web Vitals de usuarios reales. Enviar el sitemap o alcanzar una puntuación local de Lighthouse no garantiza indexación ni posición en buscadores.

Estos cambios locales no han creado una propiedad de Search Console ni han hecho despliegue, push o publicación.

## Autor

José Antonio López Molina — desarrollador Full Stack y especialista en AdTech.

Consulta las reglas para colaboradores en [AGENTS.md](AGENTS.md).
