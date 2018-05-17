#!/usr/bin/env bash
set -euox pipefail

echo "Build starting"

rm -rf ./_site
bundle exec jekyll build
bundle exec htmlproofer ./_site

echo "Build complete"
