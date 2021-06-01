module.exports = {
  hooks: {
    readPackage: (package) => {
      switch (package.name) {
        case '@nrwl/cypress':
          package.dependencies['@cypress/webpack-preprocessor'] = '^5.9.0';

          break;
        case 'any-observable':
          package.dependencies.rxjs = package.devDependencies.rxjs;

          break;
      }

      return package;
    },
  },
};
