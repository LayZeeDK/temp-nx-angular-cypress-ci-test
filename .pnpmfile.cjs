module.exports = {
  hooks: {
    readPackage: (package) => {
      switch (package.name) {
        case 'any-observable':
          package.devDependencies.rxjs = package.devDependencies.rxjs.replace(
            '^',
            '>='
          );

          break;
      }

      return package;
    },
  },
};
