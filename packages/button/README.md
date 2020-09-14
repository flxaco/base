# @flxaco/button

Button styles and sizes.

### Installation

```
npm install @flxaco/button --save-dev
```

### How to use

**CSS**

- PostCSS workflow: `@import '@flxaco/button';`
- Sass/Eyeglass: `@import 'mixtape-button';`
- Native CSS: `@import url('dist/button.css');`
- Link tag: `<link href="dist/button.css" rel="stylesheet" type="text/css">`

### Developer notes

To use with default values:

```css
@import "@flxaco/button";
```

To override variables in a project:

```css
@import "@flxaco/constants";

@import "path/to/local/project/vars.css";

@import "@flxaco/button/src/_button.css";

.button {
  /* Overrides */
}
```
