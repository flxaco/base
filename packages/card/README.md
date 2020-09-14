# @flxaco/card

Card

### Installation

```
npm install @flxaco/card --save-dev
```

### How to use

**CSS**

- PostCSS workflow: `@import '@flxaco/card';`
- Native CSS: `@import url('dist/card.css');`
- Link tag: `<link href="dist/card.css" rel="stylesheet" type="text/css">`

### Developer notes

To use with default values:

```css
@import "@flxaco/card";
```

To override variables in a project:

```css
@import "@flxaco/constants";

@import "path/to/local/project/vars.css";

@import "@flxaco/card/src/_card.css";

.card {
  /* Overrides */
}
```
