# @pnx-mixtape/layout

layout and grids.

![layout  component](https://previousnext.github.io/mixtape/screenshots/layout.png)

### Installation

```
npm install @pnx-mixtape/layout --save-dev
```

### How to use

**CSS**

- PostCSS workflow: `@import '@pnx-mixtape/layout';`
- Sass/Eyeglass: `@import 'mixtape-layout';`
- Native CSS: `@import url('dist/layout.css');`
- Link tag: `<link href="dist/layout.css" rel="stylesheet" type="text/css">`

####HTML
**Grid**

```html
<div class="grid">
  <div class="grid__col grid--6-col"></div>
  <div class="grid__col grid--6-col"></div>
</div>

<div class="grid">
  <div class="grid__col grid--4-col"></div>
  <div class="grid__col grid--4-col"></div>
  <div class="grid__col grid--4-col"></div>
</div>
```

**Section**

```html
<section class="section section--top-l section--bottom-l">
  <article class="section__content">
    <p>Section content.</p>
  </article>
</section>
```

To use with default values:

```css
@import "@pnx-mixtape/layout";
```

To override variables in a project:

```css
@import "@pnx-mixtape/constants";

@import "path/to/local/project/vars.css";

@import "@pnx-mixtape/layout/src/_layout.css";
```
