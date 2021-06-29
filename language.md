## 效果展示

> 下面的这些代码原来都是没有美化过的，但是通过 prettier 都进行了美化
### Vue ！！！！

```vue
<template>
<div id="app">
<img alt="Vue logo" src="./assets/logo.png">
<Test msg="Welcome to Your Vue.js App"/>
</div>
</template>
<script>
import Test from './components/Test.vue'
export default {
name: 'app',
components: {
Test
}
}
</script>
<style>
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>
```

### Javascript

```javascript
const code = el.innerText;
const lang = el.className.match(/(?<=lang-)\w+/g)[0];
if (lang) {
window.codeFormatter(code, lang).then((code) => {
if (Prism.languages[lang]) {
el.innerHTML = Prism.highlight(code, Prism.languages[lang], lang);
} else {
el.innerText = code;
Prism.highlightElement(el);
}
});
}
```

### Typescript

```ts
class Student {
fullName: string;
constructor(public firstName: string, public name: string) {
this.fullName = firstName + name;
}
}
interface Person {
firstName: string;
name: string;
}
function hello(person: Person) {
return person.firstName + person.name;
}
let someone = new Student("John", "Yao");
```

### HTML

```html
<script>
less = {
env: "development",
async: false,
fileAsync: false,
poll: 1000,
functions: {},
dumpLineNumbers: "comments",
relativeUrls: false,
rootpath: ":/a.com/",
};
</script>
<script src="less.js"></script>
```

### XML

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<ellipse cx="300" cy="150" rx="200" ry="80"
style="fill:rgb(200,100,50);
stroke:rgb(0,0,100);stroke-width:2"/>

</svg>
```

### Markdown

```markdown
# JSpider 快速开始
!> 接下来的文章您可以阅读到您想要的部分，但是推荐您从头开始看，看到您需要的部分就可以了。越往后的部分越专业，很多词汇和概念可能看不懂，所以请耐心观看。
## 如果你只想快速爬取文件
[](../../src/AboutAPI.drawio ":include")
### 0. 打开开发者工具
**右键 ➡ 检查，然后您可以在 Console 下面直接书写您的代码**
您可以先学习：
1. 对于 [Rxjs](https://rxjs.dev/) 有一些了解。( 这个库涉及很多艰深的编程理念，学习曲线较陡峭 )。JSpider 的源代码的多数逻辑都是使用 Rxjs 这个库进行实现的，所以如果不了解 Rxjs 的话，是很难理解 JSpider 的。
2. 学习 JSpider 的源码。
```

### CSS 

```css
.box-shadow {
     background-color: #FF8020; width: 160px; height: 90px; margin-top: -45px; margin-left: -80px; position: absolute; top: 50%; left: 50%;}.box-shadow:after { content: ""; width: 150px; height: 1px; margin-top: 88px; margin-left: -75px; display: block; position: absolute; left: 50%; z-index: -1; -webkit-box-shadow: 0px 0px 8px 2px #000000; -moz-box-shadow: 0px 0px 8px 2px #000000; box-shadow: 0px 0px 8px 2px #000000;}
```

```less
@base: #f04615;
@width: 0.5;
.class {
width: percentage(@width); // returns `50%`
color: saturate(@base, 5%);
background-color: spin(lighten(@base, 25%), 8);
}
```

```scss
$nav-color: #f90;
nav {
$width: 100px;
width: $width;
color: $nav-color;
}
```