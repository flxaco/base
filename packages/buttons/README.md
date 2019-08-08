# @pnx-mixtape/buttons

Multiple button styles and sizes.

![buttons  component](https://previousnext.github.io/mixtape/screenshots/buttons.png)

### Installation

```
npm install @pnx-mixtape/buttons --save-dev
```

### How to use

**CSS**

- PostCSS workflow: `@import '@pnx-mixtape/buttons';`
- Sass/Eyeglass: `@import 'mixtape-buttons';`
- Native CSS: `@import url('dist/buttons.css');`
- Link tag: `<link href="dist/buttons.css" rel="stylesheet" type="text/css">`

### Developer notes

To use with default values:

```css
@import "@pnx-mixtape/buttons";
```

To override variables in a project:

```css
@import "@pnx-mixtape/constants";

@import "path/to/local/project/vars.css";

@import "@pnx-mixtape/buttons/src/_buttons.css";

.button {
  /* Overrides */
}
```