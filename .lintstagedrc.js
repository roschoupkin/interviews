module.exports = {
  '*.{ts,js}': ['prettier --write', 'eslint --fix'],
  "*.spec.{ts,js}": ['npm test'],
};
