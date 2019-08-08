# @pnx-mixtape/icon

icon component.

![icon  component](https://previousnext.github.io/mixtape/screenshots/icon.png)

### Installation

```
npm install @pnx-mixtape/icon --save-dev
```

### How to use

**CSS**

- PostCSS workflow: `@import '@pnx-mixtape/icon';`
- Sass/Eyeglass: `@import 'mixtape-icon';`
- Native CSS: `@import url('dist/icon.css');`
- Link tag: `<link href="dist/icon.css" rel="stylesheet" type="text/css">`

### Developer notes

To use with default values:

```css
@import "@pnx-mixtape/icon";
```

To override variables in a project:

```css
@import "@pnx-mixtape/constants";

@import "path/to/local/project/vars.css";

@import "@pnx-mixtape/icon/src/_icon.css";

.icon {
  /* Overrides */
}
```
