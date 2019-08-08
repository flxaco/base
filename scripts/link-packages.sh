#!/usr/bin/env bash

# npm link all folders for local development.
npm install
npm run lerna:bootstrap
cd packages
find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && npm link && rm package-lock.json" \;