
## Table of contents
- [Directory structure](#directory-structure)
- [CSS: ITCSS](#css-itcss)
- [JavaScript: babel](#javascript-babel)
- [JavaScript: browserify](#javascript-browserify)
- [KSS-node: michelangelo](#kss-node-michelangelo)
- [Resources](#resources)


## Directory structure
```

┌── src
│   ├── css
│   │   ├── 1-settings
│   │   ├── 2-tools
│   │   ├── 3-generic
│   │   ├── 4-base
│   │   ├── 5-objects
│   │   ├── 6-components
│   │   ├── 7-scopes
│   │   ├── 8-trumps
│   │   └── index.scss
│   ├── js
│   ├── fonts
│   ├── img
│   └── sounds
├── tmp
├── dest
├── node_modules
├── package.json
├── bower_components
├── bower.json
├── kss_styleguide
├── kss-config.json
├── gulp_tasks
└── gulpfile.js

```


## CSS: ITCSS
It stands for Inverted Triangle CSS. It is a fully managed CSS architecture. It's not a framework or library; there's nothing to download or install.
It's a collection of principles and metrics by which developers should group and order their CSS in order to keep it scalable, terse, logical, and manageable.
It's very specifically opinionated in that it gives definite rules and guidelines for your source order and groupings, but it leaves decisions about naming conventions and preprocessors etc. up to you.

The ITCSS philosophy is a simple one at its core. Basically that we should order CSS by metrics defined by the language (and its features) than by the usual standard of human-oriented patterns.
ITCSS takes CSS and writes it in a way that browsers and the design of the language can best utilise, which gives us far better scalability and maintainability than we'd get if we were to write CSS around how a person thinks.

That said, the move to ITCSS (both conceptually and in practice) is not a huge shock to the system as you might imagine; it basically just rewires a couple of fundamentals and then it's business as usual.

- **Settings** <br> The preprocessor variables are the globally-available settings or configuration switches for our project.
- **Tools** <br> Includes all the public mixins and helper functions. These globally-available tools should make our development flow easier.
- **Generic** <br> The ground zero styles. They are low-specificity and far reaching. Think about resets and normalizing our styles for cross-browser compatibility.
- **Base** <br> Unclassed HTML elements. This is the last layer where we use type selectors. Anything necessary to style raw elements goes in here.
- **Objects** <br> Object oriented CSS. Begin using classes exclusively for agnostically named noncosmetic design patterns. This layer is mostly layout-driven.
- **Components** <br> Explicitly named designed pieces of UI. The cosmetic layer, includes more specific styling instructions.
- **Scopes** <br> Consists out of components grouped together. They rely entirely on nesting, so make sure people are aware of this.
- **Trumps** <br> Only affect one piece of the DOM at a time. These are the utility classes or overrides and usually carry !important.


## JavaScript: Babel
It gives support for the latest version of JavaScript through syntax transformers. These plugins allow you to use new syntax, right now without waiting for browser support.


## JavaScript: Browserify
It is a tool for compiling node-flavored commonjs modules for the browser. You can use browserify to organize your code and use third-party libraries.


## KSS-node: michelangelo
This software is a Node.js implementation of Knyle Style Sheets (KSS). This is a documentation syntax for CSS, that's intended to have syntax readable by humans and machines. The kss-node software can be used to create a living style guide.

Write human-readable documentation using KSS syntax comments. Have the kss tool automatically build a style guide from your stylesheets. Michelangelo is the custom template for the KSS-node living style guide. Have a look [here](https://github.com/stamkracht/michelangelo "Github repo: michelangelo") to get started with the template and the kss-node syntax.


## Resources
- [ITCSS](http://www.creativebloq.com/web-design/manage-large-scale-web-projects-new-css-architecture-itcss-41514731 "Manage large-scale web projects with new CSS architecture ITCSS")
- [Babel](https://babeljs.io/ "Babel transforms your JavaScript")
- [Browserify](https://github.com/substack/browserify-handbook "How to use browserify to build modular applications")
- [Michelangelo](https://github.com/stamkracht/michelangelo "Github repo: michelangelo")
- [KSS-node](https://github.com/kss-node/kss-node "Github repo: kss-node")
