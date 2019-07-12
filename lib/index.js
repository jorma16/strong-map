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

  getTruthyKeys() {
    return [...this.entries()]
      .filter(([, allowed]) => allowed)
      .map(([key]) => key);
  }
}

module.exports = StrongMap;
