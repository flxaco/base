# @flxaco-base/buttons

Multiple button styles and sizes.

![buttons  component](https://previousnext.github.io/mixtape/screenshots/buttons.png)

### Installation

```
npm install @flxaco-base/buttons --save-dev
```

### How to use

**CSS**

- PostCSS workflow: `@import '@flxaco-base/buttons';`
- Sass/Eyeglass: `@import 'mixtape-buttons';`
- Native CSS: `@import url('dist/buttons.css');`
- Link tag: `<link href="dist/buttons.css" rel="stylesheet" type="text/css">`

### Developer notes

To use with default values:

```css
@import "@flxaco-base/buttons";
```

To override variables in a project:

```css
@import "@flxaco-base/constants";

@import "path/to/local/project/vars.css";

@import "@flxaco-base/buttons/src/_buttons.css";

.button {
  /* Overrides */
}
```
