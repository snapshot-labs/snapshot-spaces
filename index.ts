// @ts-ignore
import requireContext from 'require-context';

const requireSpace = requireContext(`${__dirname}/spaces`, true, /[\w-]+\.json$/);

export default Object.fromEntries(
  requireSpace
    .keys()
    .filter(
      file =>
        ![
          './domains.json',
          './spotlight.json',
          './example/index.json'
        ].includes(file)
    )
    .map(file => {
      const space = requireSpace(file);
      const key = file.replace('./', '').replace('/index.json', '');
      const strategies = [
        [
          'erc20-balance-of',
          {
            address: space.address,
            decimals: space.decimals,
            symbol: space.symbol
          }
        ]
      ];
      return [
        key,
        { ...space, key, strategies: space.strategies || strategies }
      ];
    })
);
