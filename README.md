# docsify-prettier

## 简介

docsify-prettier 是用于格式化代码的一个 docsify 插件，通过将代码格式化，更好地体现代码之美！

> 不需要改动原来的 markdown 文件，只是你需要写对你的代码块的语言才会进行格式化！

## 使用方式

1. 在 docsify 的 html 中加入文件

> !! 这个玩意必须放置在 window.$docsify 声明之后

```html
<!-- 必须的插件 -->
<script src="https://cdn.jsdelivr.net/npm/prettier@2.3.2/standalone.js"></script>

<!-- 语言解析的插件，可以挑选你需要的代码语言，这里只是放置了我的一些配置，你可以自己查看 prettier 的文档进行文件的添加 -->
<script src="https://cdn.jsdelivr.net/npm/prettier@2.3.2/parser-postcss.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prettier@2.3.2/parser-typescript.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prettier@2.3.2/parser-babel.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prettier@2.3.2/parser-html.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prettier@2.3.2/parser-markdown.js"></script>

<!-- 加入我的插件 -->
<script src="https://cdn.jsdelivr.net/npm/docsify-prettier/prettier.js"></script>
```

2. 在 $docsify 写一些东西

```js
window.$docsify = {
    // 在这里写入你的 prettier 设置，如果你不会设置，那么就不写好了
    prettier: {
        printWidth: 80,
        tabWidth: 4,
        useTabs: false,
        endOfLine: 'auto',
        singleQuote: false,
        semi: true,
        trailingComma: 'all',
        bracketSpacing: true,
    },
    // 在这里需要写一个格式化的逻辑
    markdown: {
        renderer: {
            code: function (code, lang, ...args) {
                return this.origin.code.call(this, window.codeFormatter(code, lang), lang, ...args);
            },
        },
    },
};
```

2. 然后就可以看到格式化的效果了！

## 感谢

感谢 prettier 库的美化插件，要说的话， prettier 无敌！

## License

MIT License © KonghaYao 江夏尧 动中之动

[](./language.md ':include')
