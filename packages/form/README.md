# @pnx-mixtape/form

form component.

![form  component](https://previousnext.github.io/mixtape/screenshots/form.png)

### Installation

```
npm install @pnx-mixtape/form --save-dev
```

### How to use

**CSS**

- PostCSS workflow: `@import '@pnx-mixtape/form';`
- Sass/Eyeglass: `@import 'mixtape-form';`
- Native CSS: `@import url('dist/form.css');`
- Link tag: `<link href="dist/form.css" rel="stylesheet" type="text/css">`

### Developer notes

To use with default values:

```css
@import "@pnx-mixtape/form";
```

To override variables in a project:

```css
@import "@pnx-mixtape/constants";
@import "@pnx-mixtape/form/src/_vars.css";

@import "path/to/local/project/vars.css";

@import "@pnx-mixtape/form/src/_form.css";

.form {
  /* Overrides */
}
```
