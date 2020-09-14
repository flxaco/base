# @flxaco/footer

Global variables.

### Installation

```
npm install @flxaco/footer --save-dev
```

### How to use

**CSS**

- PostCSS workflow: `@import '@flxaco/footer';`
- Native CSS: `@import url('dist/footer.css');`
- Link tag: `<link href="dist/footer.css" rel="stylesheet" type="text/css">`

### Developer notes

To override variables in a project:

```css
@import "@flxaco/footer";

:root {
  --brand-primary: hsl(24, 95%, 50%);
  --brand-secondary: hsl(123, 41%, 45%);
} /* Or import project var file */

@import "@flxaco/component/src/_component.css";

.component {
  /* Overrides */
}
```
