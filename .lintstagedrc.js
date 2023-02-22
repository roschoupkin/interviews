'use strict';

module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,html,md,yml}': ['prettier --write'],
};
