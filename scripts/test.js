'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const jest = require('jest');
<<<<<<< HEAD
let argv = process.argv.slice(2);
=======
const argv = process.argv.slice(2);
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358

// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}


<<<<<<< HEAD
jest.run(argv);
=======
jest.run(argv);
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358
