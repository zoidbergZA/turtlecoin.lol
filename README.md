[![Build Status](https://travis-ci.org/turtlecoin/turtlecoin.lol.svg?branch=master)](https://travis-ci.org/turtlecoin/turtlecoin.lol)

# turtlecoin.lol

To submit or propose changes to [turtlecoin.lol](https://turtlecoin.lol), submit a pull request to this repository.


## Developing

### About

This project uses [Jekyll](https://jekyllrb.com) to generate a static website.

### Setup

1. Make sure you have [Ruby](https://www.ruby-lang.org/en) 2.3 or newer installed.
2. Run `gem install bundler` to install [bundler](http://bundler.io).
3. Run `bundle install` to install the dependencies of this project.
4. Run `bundle exec jekyll serve` to start the development server at `http://localhost:4000`. See [Jekyll documentation](https://jekyllrb.com/docs/home/) for more information.


## Deployment

Commits to `master` auto deploy via Travis CI to GitHub pages.

### Deploying manually

* `./scripts/build.sh`
* `./scripts/deploy.sh` 


## Localization

All translations live in the `_i18n` folder.

### Adding a new language

* Create a copy of `_i18n/en.yml` and name the file after the locale.
* Replace the English text with the translated version.
* Add the language details to the _Localization config_ in `_config.yml`.

### Contributors

* Afrikaans: [@jacojvv](https://github.com/jacojvv), [@Reinsie44](https://github.com/Reinsie44)
* Chinese: [@sbc-trtl](https://github.com/sbc-trtl), `@sdyu ges`
* Français: [@DaliaAsTrue](https://github.com/DaliaAsTrue), [@romromna](https://github.com/romromna), [@SaintePelle](https://github.com/SaintePelle), [@andrelegault](https://github.com/andrelegault)
* Italiano: [@andreafno](https://github.com/andreafno), [@4k4](https://github.com/4k4)
