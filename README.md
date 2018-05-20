[![Build Status](https://travis-ci.org/ar-x/turtlecoin.lol.svg?branch=master)](https://travis-ci.org/ar-x/turtlecoin.lol)

# turtlecoin.lol

To submit or propose changes to [turtlecoin.lol](https://turtlecoin.lol), submit a pull request to this repository.

## On this Fork

* CSS and JS are fingerprinted so that browser caches are busted on a change.
* CSS and JS are bundled for frontend performance.
* The brand page has been fixed and simplified. Today, the production version throws JS exceptions and is visually broken
* The old footer which exists on the brand page has been made global. 
* HTML validation and dead linking checking is done in tests.
* Travis auto deploys site to `gh-pages` (can be done manually via `deploy.sh` too).


## Before merge

* Enable the real `peers.geojson`
