# turtlecoin.lol

To submit or propose changes to the main marketing page, submit a pull request to this repository


## Getting Started

### Prerequisites

[Node.js](https://nodejs.org/en/)


Gulp
```
npm install -g gulp
```
### Build Instructions

Clone the repository.
```
git clone https://github.com/turtlecoin/turtlecoin.lol
cd turtlecoin.lol
```
Install packages
```
npm install
```
Run tests
```
gulp test
```
Build
```
gulp build
```

## Adding a Language
* Copy languages/en.json to your-language.json, like es.json, de.json, etc.
* Translate everything.
* Run gulp build. If any of your formatting is bad, you'll see an error.  
* If no errors, your language is now included.  Open www/index.html in a browser, and you should see your language in the languages menu at the top-right of the page for desktop, or at the bottom of the menu for mobile.
