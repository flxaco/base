#!/usr/bin/env bash

echo "Removing all node_modules, package-lock.json and dist dirs from packages..."
cd packages
find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && rm -rf node_modules && rm -rf dist && rm -f package-lock.json" \;
cd ..
