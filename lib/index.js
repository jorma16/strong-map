const fns = require('./utils/fn');

class StrongMap extends Map {
  get(...args) {
    const [k] = args;
    if (k instanceof Object) {
      const key = [...this.keys()].find((k2) => fns.equals(k, k2));

      return super.get(key);
    }

    return super.get(...args);
  }
}

module.exports = StrongMap;
