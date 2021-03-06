module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    mocha: true
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};
