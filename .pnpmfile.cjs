module.exports = {
  hooks: {
    readPackage: (package) => {
      switch (package.name) {
        case '@cypress/webpack-preprocessor':
          package.dependencies.webpack = '^5.30.0';
          package.peerDependencies.webpack = '^5.30.0';

          break;
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
