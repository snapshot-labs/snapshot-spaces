// This file is for snapshot-hub
// @ts-ignore
const requireContext = require('require-context');
// @ts-ignore
const requireSpace = requireContext(`${__dirname}/spaces`, true, /[\w-]+\.json$/);

// @ts-ignore
module.exports = Object.fromEntries(
  requireSpace
    .keys()
    .filter(
      file =>
        ![
          'domains.json',
          'spotlight.json',
          'aliases.json',
          'example/index.json'
        ].includes(file)
    )
    .map(file => {
      const space = requireSpace(file);
      const key = file.replace('./', '').replace('/index.json', '');
      return [key, space];
    })
);
