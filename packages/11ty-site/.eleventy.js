const { EleventyRenderPlugin } = require('@11ty/eleventy');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');
const markdownItEmoji = require('markdown-it-emoji');

module.exports = function (config) {
  // css
  // config.addPassthroughCopy('./src/**/*.css');
  config.addWatchTarget('./src/**/*.css/');

  // js
  config.addPassthroughCopy('./src/scripts');
  config.addWatchTarget('./src/scripts');

  // plugins
  config.addPlugin(EleventyRenderPlugin);
  config.addPlugin(syntaxHighlight);

  // markdown library config
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItEmoji);
  config.setLibrary('md', markdownLibrary);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
