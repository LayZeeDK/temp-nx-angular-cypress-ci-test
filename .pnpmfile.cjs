module.exports = {
  hooks: {
    readPackage: (package) => {
      switch (package.name) {
        case '@samverschueren/stream-to-observable':
          package.dependencies['any-observable'] = '~0.3.0';

          break;
        case 'any-observable':
          package.dependencies['rxjs'] = '~6.6.0';

          break;
        case 'cypress':
        case 'listr':
          package.dependencies['any-observable'] = '~0.3.0';
          package.dependencies['rxjs'] = '~6.6.0';

          break;
      }

      return package;
    },
  },
};
