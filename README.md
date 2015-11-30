# grunt-nyc

[![Build Status](https://travis-ci.org/tdeekens/grunt-nyc.svg?branch=master)](https://travis-ci.org/tdeekens/grunt-nyc) ♦️
[![Dependency Status](https://david-dm.org/tdeekens/grunt-nyc.svg?style=flat)](https://david-dm.org/tdeekens/grunt-nyc) ♦️
[![devDependency Status](https://david-dm.org/tdeekens/grunt-nyc/dev-status.svg)](https://david-dm.org/tdeekens/grunt-nyc#info=devDependencies) ♦
[![npm version](https://badge.fury.io/js/grunt-nyc.svg)](http://badge.fury.io/js/grunt-nyc)

> Grunt task for the [nyc](https://github.com/bcoe/nyc) code coverage tool.

[![NPM](https://nodei.co/npm/grunt-nyc.png)](https://nodei.co/npm/grunt-nyc/)

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

### Install node dependency via npm

```shell
npm install grunt-nyc --save-dev
``````

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-nyc');
```

## The "nyc" task

### Overview
In your project's Gruntfile, the `nyc` task is available to use.

You can run `grunt nyc` standalone
Or add it to an existing task: `grunt.registerTask('test', ['clean', 'nyc']);`

### Options

```js

```

An example configuration can be found [here](https://github.com/tdeekens/grunt-nyc/blob/master/grunt/tasks/nyc.js) and if you want to check the options you might want to check the [Gruntfile](https://github.com/tdeekens/grunt-nyc/blob/master/tasks/nyc.js) itself.

## Developing & Contributing

Developing on the task alone is fairly easy just `git clone https://github.com/tdeekens/grunt-nyc.git` then `cd grunt-nyc`. From there one has to link the package to itself via `npm link && npm link grunt-nyc` which will allow for calling `grunt dev`. Now just work the `task/nyc.js` and check results - feel free to submit a pull-request!

## Release History

- 0.0.0 Development, do not use!

## Acknowledgements

- ...to great people around me supporting me with ideas and feedback!
