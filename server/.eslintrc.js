module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    parser: "@typescript-eslint/parser",
    rules: {
        quotes: ["error", "double"],
        semi: ["error", "always"],
        indent: ["error", 4],
        "no-multi-spaces": ["error"]
    }
};
