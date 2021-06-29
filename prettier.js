const languageMap={
    // 当 language 被认定为是左边的文字时，翻译为 prettier 内的模块
    js:'babel',
    javascript:'babel',
    ts:'typescript',
    typescript:'typescript',
    less:'less',
    scss:'scss',
    html:'html',
    "xml":"html",
    css:'css',
    "flow":"flow",
    "json":"json",
    "markdown":"markdown",
    "mdx":"mdx",
    "md":"markdown",
    "vue":"vue",
    "angular":"angular",
    "lwc":"lwc",
    "yaml":"yaml",
    "graphql":"graphql"
}
function codeFormatter(script, language = "javascript") {
   
    const options = window.$docsify.prettier?window.$docsify.prettier.options:{}
    const parser = languageMap[language.trim()]
    return parser? prettier.format(
        script,
        {
            parser,
            plugins:window.prettierPlugins,
            options
        },
    ):script
};
