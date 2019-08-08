# @flxaco/constants

Global variables.

### Installation

```
npm install @flxaco/constants --save-dev
```

### How to use

**CSS**

- PostCSS workflow: `@import '@flxaco/constants';`
- Sass/Eyeglass: `@import 'mixtape-constants';`
- Native CSS: `@import url('dist/constants.css');`
- Link tag: `<link href="dist/constants.css" rel="stylesheet" type="text/css">`

### Developer notes

To override variables in a project:

```css
@import "@flxaco/constants";

:root {
  --brand-primary: hsl(24, 95%, 50%);
  --brand-secondary: hsl(123, 41%, 45%);
} /* Or import project var file */

@import "@flxaco/component/src/_component.css";

.component {
  /* Overrides */
}
```
