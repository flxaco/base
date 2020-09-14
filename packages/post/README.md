# @flxaco/logo

Global variables.

### Installation

```
npm install @flxaco/logo --save-dev
```

### How to use

**CSS**

- PostCSS workflow: `@import '@flxaco/logo';`
- Native CSS: `@import url('dist/logo.css');`
- Link tag: `<link href="dist/logo.css" rel="stylesheet" type="text/css">`

### Developer notes

To override variables in a project:

```css
@import "@flxaco/logo";

:root {
  --brand-primary: hsl(24, 95%, 50%);
  --brand-secondary: hsl(123, 41%, 45%);
} /* Or import project var file */

@import "@flxaco/component/src/_component.css";

.component {
  /* Overrides */
}
```
