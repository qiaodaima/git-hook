module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        'semi': [1, 'always'],       // 语句强制分号结尾
        'quotes': [1, 'single'],     // 强制使用单引号
        'eqeqeq': 1,                 // 必须使用全等
        'eol-last': 1,               // 文件以换行符结束
        'camelcase': 1,              // 强制驼峰法命名
    }
};
