# Proposal: Homepage Editorial Layout Redesign

## Intent

Rediseñar la portada para que se lea como primera página de periódico real, rompiendo la retícula uniforme actual y reforzando la jerarquía editorial con “Sobre mí” como noticia principal.

## Scope

### In Scope
- Reorganizar la portada en composición editorial asimétrica: 1 hero, 2 piezas medias y 2 piezas pequeñas.
- Mantener “Sobre mí” como historia dominante por posición, tamaño e imagen.
- Ajustar `FrontPageArticle` para variantes visuales y espaciales más periodísticas.
- Conservar los módulos fake ad/publicidad y el concepto portfolio periódico.
- Afinar responsive para que la jerarquía siga clara en tablet y móvil.

### Out of Scope
- Cambios de copy, rutas o contenido de artículos.
- Rediseño global del header, navegación, footer o páginas internas.
- Sustitución del concepto publicitario por otro lenguaje visual.

## Capabilities

### New Capabilities
- `homepage-editorial-frontpage`: Define la jerarquía y composición de portada tipo diario para la home.

### Modified Capabilities
- None.

## Approach

Sustituir la grid simétrica de 3 columnas por una maqueta editorial con áreas nombradas, spans asimétricos y tamaños de tarjeta diferenciados. `index.astro` controlará la jerarquía de colocación; `FrontPageArticle.astro` expondrá variantes de hero/medio/breve con reglas de imagen, titulares y densidad visual inspiradas en ABC, El Correo y El País.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/pages/index.astro` | Modified | Nueva composición de portada y responsive layout |
| `src/components/FrontPageArticle.astro` | Modified | Variantes editoriales y ajustes de jerarquía visual |
| `src/data/articles.json` | Modified | Revisión de tamaños/metadatos si la composición lo requiere |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| La asimetría rompa legibilidad en responsive | Medium | Definir degradación clara a 2 columnas y 1 columna |
| El hero pierda protagonismo visual | Low | Fijar reglas explícitas de área, imagen y escala tipográfica |

## Rollback Plan

Revertir `src/pages/index.astro` y `src/components/FrontPageArticle.astro` al layout de grid uniforme actual y restaurar los tamaños previos en `src/data/articles.json` si se modifican.

## Dependencies

- Ninguna externa. Cambio de layout y estilos sobre componentes existentes.

## Success Criteria

- [ ] La home muestra 1 historia hero, 2 medias y 2 pequeñas con jerarquía clara.
- [ ] “Sobre mí” sigue siendo la pieza dominante en desktop y mantiene prioridad en responsive.
- [ ] La portada se percibe menos uniforme y más cercana a una primera página editorial.
- [ ] Los módulos de publicidad actuales se conservan sin romper el concepto visual.
