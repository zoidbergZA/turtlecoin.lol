[![Build Status](https://travis-ci.org/ar-x/turtlecoin.lol.svg?branch=master)](https://travis-ci.org/ar-x/turtlecoin.lol)

# turtlecoin.lol

To submit or propose changes to [turtlecoin.lol](https://turtlecoin.lol), submit a pull request to this repository.

## On this Fork

* 2 locales - EN (default) and DE
* CSS and JS are fingerprinted so that browser caches are busted on a change. These are also bundled for better frontend performance (and pagespeed score).
* The brand page has been fixed and simplified. Today, the production version throws JS exceptions and is visually broken
* The old global footer which exists on the brand page has been made global. 
* HTML validation and dead linking checking is done in tests.
* Travis auto deploys site to`gh-pages` (can be done manually via `deploy.sh` too).


## Before merge

* Enable the real `peers.geojson`
