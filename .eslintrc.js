module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "eslint-config-prettier",
        "plugin:node/recommended",
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": ["eslint-plugin-prettier"],
    "rules": {
        "no-console": "off",
        "prettier/prettier": [
            "error", 
            {
                endOfLine: "auto",
            },
        ]
    }
}
