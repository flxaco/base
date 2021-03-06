# Base

My personal "Base" monorepo of postcss and react components. Built to be used by projects that import postcss and react.

The objective here is to keep the components simple and unopinionated.

### Demo

View the example demo on the [gh-pages branch](https://flxaco.github.io/base).

### Build tools

**1. Dependencies and building**

```
npm install
npm start
```

`npm start` just runs storybook in dev mode. The webpack configuration has been overridden in `.storybook/main.js`. I've removed the original css rule and replaced it with a new css rule for postcss processing and output.

**2. Link packages for local development**

You can use the local versions of Base packages in other local repos with the
help of `npm link`. The command below needs to be run in this repo first. Follow
instructions in the other repo to finish the linking process.

Ensure you are using NVM, and have the same version specified in your
projects `.nvmrc` file as this project.

Run the following from your host (no inside docker):

```
nvm install && nvm use
npm run link-packages
```

This will build packages and run `npm link` for each package.

In your other project run:

```
nvm install && nvm use
npm link @flxaco/package
```

You will need to run `npm link` for each package you wish to link. You
can setup a shell script if you would like to link to all at once.

Linking from Docker ins't possible so you will need to run all build
tools on your host.

**3. Publishing a release**

When you are ready to publish a release to npmjs.org, commit all changes and
create a pull request, wait for Circleci to pass, and get the code reviewed.

Merge the PR, then run:

```
npm run lerna:publish
```

This will go through all packages that have changed since their last release
and walk you through bumping each version number. It will change the version
number in package.json and commit the change to git.

We are using independant versioning so each package in the monorepository has it's own version number.

Finally, to publish these versions run:

**4. Create a new package**

Packages should represent self contained components (eg. the `social` package),
or in some cases groups of related components (eg. the `form` package).

First, come up with a package name. Keep it simple - one word, a-z only,
all lowercase, no hyphens or special characters.

Then run:

```bash
npm run create-package
```

An interactive prompt will ask you the package name and bootstrap your package and then setup your package boilerplate inside `packages/<package>`.

Now you can build it, add tests to a `tests` directory inside your package, and when you are ready, follow the publish instructions for a single package above.
