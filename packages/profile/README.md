# @flxaco/header

Multiple button styles and sizes.

![header  component](https://previousnext.github.io/mixtape/screenshots/header.png)

### Installation

```
npm install @flxaco/header --save-dev
```

### How to use

**CSS**

- PostCSS workflow: `@import '@flxaco/header';`
- Sass/Eyeglass: `@import 'mixtape-header';`
- Native CSS: `@import url('dist/header.css');`
- Link tag: `<link href="dist/header.css" rel="stylesheet" type="text/css">`

### Developer notes

To use with default values:

```css
@import "@flxaco/header";
```

To override variables in a project:

```css
@import "@flxaco/constants";

@import "path/to/local/project/vars.css";

@import "@flxaco/header/src/_header.css";

.button {
  /* Overrides */
}
```
