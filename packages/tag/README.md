# @flxaco/page

Page

### Installation

```
npm install @flxaco/page --save-dev
```

### How to use

**CSS**

- PostCSS workflow: `@import '@flxaco/page';`
- Sass/Eyeglass: `@import 'mixtape-page';`
- Native CSS: `@import url('dist/page.css');`
- Link tag: `<link href="dist/page.css" rel="stylesheet" type="text/css">`

### Developer notes

To use with default values:

```css
@import "@flxaco/page";
```

To override variables in a project:

```css
@import "@flxaco/constants";

@import "path/to/local/project/vars.css";

@import "@flxaco/page/src/_page.css";

.button {
  /* Overrides */
}
```
