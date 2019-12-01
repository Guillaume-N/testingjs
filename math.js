// sum is intentionally broken
const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

// this is to simulate async functions
const sumAsync = (...args) => Promise.resolve(sum(...args));
const subtractAsync = (...args) => Promise.resolve(subtract(...args));

module.exports = { sum, subtract, sumAsync, subtractAsync };
