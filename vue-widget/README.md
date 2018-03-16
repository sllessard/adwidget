# vue-widget

> Vue.js Ad Widget

Adwidget.js rebuilt with Vue.js. Submission code verification added to widget.

## Setup
In HTML:

 `<div id="app"></div>`
For production, after completing Build Setup step for production include build.js found in /dist:

 `<script src="build.js" async></script>`

## Configuration
In src/config.js adDimensions and thankYouMessage can be set. Widget background is controlled in App.vue as a SCSS variable in <style>.
  
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
