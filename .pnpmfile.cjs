module.exports = {
  hooks: {
    readPackage: (package) => {
      switch (package.name) {
        case 'any-observable':
          package.dependencies.rxjs = '>=6.0.0';

          break;
      }

      return package;
    },
  },
};
