const LM = {
    angular: "https://cdn.jsdelivr.net/npm/prettier/esm/parser-angular.mjs ",
    babel: "https://cdn.jsdelivr.net/npm/prettier/esm/parser-babel.mjs ",
    espree: "https://cdn.jsdelivr.net/npm/prettier/esm/parser-espree.mjs ",
    flow: "https://cdn.jsdelivr.net/npm/prettier/esm/parser-flow.mjs ",
    glimmer: "https://cdn.jsdelivr.net/npm/prettier/esm/parser-glimmer.mjs ",
    graphql: "https://cdn.jsdelivr.net/npm/prettier/esm/parser-graphql.mjs ",
    html: "https://cdn.jsdelivr.net/npm/prettier/esm/parser-html.mjs ",
    markdown: "https://cdn.jsdelivr.net/npm/prettier/esm/parser-markdown.mjs ",
    meriyah: "https://cdn.jsdelivr.net/npm/prettier/esm/parser-meriyah.mjs ",
    postcss: "https://cdn.jsdelivr.net/npm/prettier/esm/parser-postcss.mjs ",
    typescript: "https://cdn.jsdelivr.net/npm/prettier/esm/parser-typescript.mjs ",
    yaml: "https://cdn.jsdelivr.net/npm/prettier/esm/parser-yaml.mjs",
    pug: "https://cdn.jsdelivr.net/gh/prettier/plugin-pug",
    php: "https://cdn.jsdelivr.net/gh/prettier/plugin-php",
    ruby: "https://cdn.jsdelivr.net/gh/prettier/plugin-ruby",
    xml: "https://cdn.jsdelivr.net/gh/prettier/plugin-xml",
    lua: "https://cdn.jsdelivr.net/gh/prettier/plugin-lua",
    haml: "https://cdn.jsdelivr.net/gh/prettier/plugin-haml",
    swift: "https://cdn.jsdelivr.net/gh/prettier/plugin-swift",
    // apex: "https://cdn.jsdelivr.net/gh/dangmai/prettier-plugin-apex",
    // elm: "https://cdn.jsdelivr.net/gh/gicentre/prettier-plugin-elm",
    // go: "https://cdn.jsdelivr.net/gh/NiklasPor/prettier-plugin-go-template",
    // java: "https://cdn.jsdelivr.net/gh/jhipster/prettier-java",
    // kotlin: "https://cdn.jsdelivr.net/gh/Angry-Potato/prettier-plugin-kotlin",
    // properties: "https://cdn.jsdelivr.net/gh/eemeli/prettier-plugin-properties",
    // solidity: "https://cdn.jsdelivr.net/gh/prettier-solidity/prettier-plugin-solidity",
    // svelte: "https://cdn.jsdelivr.net/gh/UnwrittenFun/prettier-plugin-svelte",
    // toml: "https://cdn.jsdelivr.net/gh/bd82/toml-tools/prettier-plugin-toml",
};
const NameToLanguage = {
    js: "babel",
    javascript: "babel",

    vue: ["html", "babel", "postcss"],

    md: "markdown",
    css: "postcss",
    less: "postcss",
    scss: "postcss",
    ts: "typescript",
    svg: "html",
};
export default {
    convertName(name) {
        const language = NameToLanguage[name];
        return language || name;
    },
    loadLanguage(languageName) {
        let packageNames = this.convertName(languageName);
        if (typeof packageNames === "string") packageNames = [packageNames];
        return Promise.all(
            packageNames.reduce((collection, name) => {
                if (LM.hasOwnProperty(name)) {
                    let result;
                    if (typeof LM[name] === "string") {
                        result = import(LM[name]).then((res) => {
                            LM[name] = res.default; // 直接下载完就缓存
                            return res.default;
                        });
                    } else {
                        result = LM[name];
                    }
                    collection.push(result);
                }
                return collection;
            }, [])
        );
    },
};
