import { expect } from '@jest/globals';

expect.extend({
  toBeEqualUnordered(received, expected) {
    if (!(Array.isArray(received) && Array.isArray(expected))) {
      return {
        message: () => `Expected both values to be arrays`,
        pass: false,
      };
    }

    const pass =
      received.length === expected.length &&
      received.sort().toString() === expected.sort().toString();

    return {
      message: () =>
        pass
          ? `Expected arrays to not be equal (ignoring order)`
          : `Expected arrays to be equal (ignoring order)`,
      pass,
    };
  },
});

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeEqualUnordered(expected: any[]): R
    }
  }
}