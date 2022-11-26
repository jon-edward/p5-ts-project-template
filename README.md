# p5-ts-project-template

This is a basic template for writing a [p5.js](https://p5js.org/) sketch 
in Typescript.

## Building

After installing the required libraries with 
`npm install -g browserify exorcist sorcery uglifyify`, 
you can run `npm run build` to preserve the sourcemap for debugging or 
`npm run build-release` to exclude the sourcemap. 

Building produces `index.js`, which is referenced by `index.html`. 
After building has completed, you can open `index.html` to see the changes.

## Making changes

The default, minimal functionality of `p5-ts-project-template` is to produce a 
small, black circle in a white 100x100 canvas. By changing `source/Canvas.ts`, you
can produce different results; for example, changing `this.p5.fill(0)` to 
`this.p5.fill(255, 0, 0)` changes the color of the black circle to red.

## Purpose

This template is designed as a minimal example for developers to explore 
[p5.js](https://p5js.org/) using Typescript without needing to configure a server 
while still allowing modularity in expanding a project over multiple files.


## Demo

You can find an interactive demo on CodeSandbox [here](https://codesandbox.io/s/p5-ts-project-template-82uunw).
