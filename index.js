// @ts-ignore
const requireContext = require('require-context');

const requireSpace = requireContext(`${__dirname}/spaces`, true, /[\w-]+\.json$/);

module.exports = Object.fromEntries(
  requireSpace
    .keys()
    .filter(
      file =>
        ![
          'domains.json',
          'spotlight.json',
          'example/index.json'
        ].includes(file)
    )
    .map(file => {
      const space = requireSpace(file);
      const key = file.replace('./', '').replace('/index.json', '');
      return [key, space];
    })
);
