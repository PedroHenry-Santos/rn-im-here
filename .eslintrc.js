module.exports = {
  extends: ['@pedrohenry-santos/eslint-config/react-native'],
  rules: {
    "unicorn/filename-case": [
      "error",
      {
        "cases": {
          "kebabCase": true,
          "pascalCase": true
        }
      }
    ]
  }
}
