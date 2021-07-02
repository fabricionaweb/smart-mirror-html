# What

A personal web solution, run-time ony (no build process, no webpack), just HTML, CSS and JS only.  
I'll try to make this as light as I can.

My plan here is to develop my own basic widgets to personal use.  
If you know some basic web development, the code should be self-explanatory.

**⚠️ Never publish the app, you should run locally or intranet only. Otherwise you expose your sensible data and API keys**

# Why

I'd like to build my [smart mirror](https://smartmirrorguide.com/what-is-a-smart-mirror/).  
Basically is a display behind a mirror running a software (sometimes just a web browser) in a high contrast.

You can use solutions that [already exists](https://magicmirror.builders/).  
But I decided to make my only basic solution, very basic.

Just because I like.

# Run

1. Setup the static server to this project root
  1. Server can be [nginx](https://www.nginx.com/) or others. For development I choose [servo](https://www.npmjs.com/package/servo)
1. Open in the browser

# Tech

- Im developing the widgets with [preact](https://preactjs.com/) and [htm](https://github.com/developit/htm)
- The JavaScript are [ES6 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#aside_—_.mjs_versus_.js) only.
- The packages are provided by [skypack](https://www.skypack.dev/).
- _I will think about tests later._
- My environments variable (to consume some API) will be stored in a simple JS module ([src/keys.mjs](./src/keys.sample.mjs)) and **ignored from git**.
  - **⚠️ Never expose your application, its internal use only**
- CSS3 and SVG

I'll run through Raspberry Pi some lite OS with GUI (I did not decide which one yet) to get Chromium capabilities

# That is all
