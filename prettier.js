// webpack 打包网络地址时会报错
import prettier from "https://cdn.jsdelivr.net/npm/prettier/esm/standalone.mjs";
window.prettier = prettier;
import languageTree from "./languageTree.js";
const defaultOptions = {
    tabWidth: 4,
};
const codeFormatter = async function (script, language = "javascript", options = {}) {
    let parser = languageTree.convertName(language);
    if (parser instanceof Array) parser = parser[0];
    const plugins = await languageTree.loadLanguage(language);
    switch (parser) {
        case "postcss":
        case "vue":
            parser = language;
    }
    return prettier.format(
        script,
        Object.assign(
            {
                parser,
                plugins,
            },
            defaultOptions,
            options
        )
    );
};

window.codeFormatter = codeFormatter;
window.$docsify.plugins.push(function (hook, vm) {
    // parse twemoji
    hook.doneEach(function () {
        document.querySelectorAll("pre > [class^=lang]").forEach((el) => {
            const code = el.innerText;
            const lang = el.className.match(/(?<=lang-)\w+/g)[0];
            if (lang) {
                window.codeFormatter(code, lang).then((code) => {
                    try {
                        el.innerHTML = Prism.highlight(code, Prism.languages[lang], lang);
                    } catch (e) {
                        Prism.highlightElement(el);
                    }
                });
            }
        });
    });
});
export default codeFormatter;
