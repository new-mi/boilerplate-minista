/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'scss/dollar-variable-pattern': /[a-z][a-zA-Z]+/,
  },
};
