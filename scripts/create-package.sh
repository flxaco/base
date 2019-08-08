#!/usr/bin/env bash

# Initialise a new package, renaming placeholders to the package name.
read -p "What would you like to call it? (lowercase and hyphens only): " PACKAGE_NAME

echo "Creating new package:" $PACKAGE_NAME

cp -R scripts/package-template packages/$PACKAGE_NAME

TEMPLATE_FILES="packages/$PACKAGE_NAME/package.json \
packages/$PACKAGE_NAME/README.md \
packages/$PACKAGE_NAME/src/PACKAGE_NAME.css \
packages/$PACKAGE_NAME/src/PACKAGE_NAME.es6.js \
packages/$PACKAGE_NAME/src/PACKAGE_NAME.twig"

# String replace PACKAGE_NAME in templates.
find $TEMPLATE_FILES -type f -exec sed -i '' -e "s/PACKAGE_NAME/$PACKAGE_NAME/g" {} \;

# Rename files
mv packages/$PACKAGE_NAME/src/PACKAGE_NAME.css packages/$PACKAGE_NAME/src/$PACKAGE_NAME.css
mv packages/$PACKAGE_NAME/src/PACKAGE_NAME.es6.js packages/$PACKAGE_NAME/src/$PACKAGE_NAME.es6.js
mv packages/$PACKAGE_NAME/src/PACKAGE_NAME.twig packages/$PACKAGE_NAME/src/$PACKAGE_NAME.twig

lerna bootstrap

# npm link for local development.
# run `npm link PACKAGE_NAME` from another project dir to use a local symlink.
cd packages/$PACKAGE_NAME
npm link
cd ../../
