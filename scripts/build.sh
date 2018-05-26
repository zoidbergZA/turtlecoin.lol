#!/usr/bin/env bash
set -euox pipefail

echo "Build starting"

rm -rf ./_site
bundle exec jekyll build
git submodule update --recursive --remote --merge
cp -r paper-turtle _site

bundle exec rake tests

echo "Build complete"
