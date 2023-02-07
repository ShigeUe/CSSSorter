const postcss = require('postcss');
const sorting = require('postcss-sorting');
const option = require('./postcss-sorter.config');


window.CSSSorter = async (css) => {
  if (!css) {
    return null;
  }
  const p = postcss(sorting(option));
  const r = await p.process(css, { from: css });

  return r.css;
};
