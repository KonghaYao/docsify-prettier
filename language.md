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
return  person.firstName + person.name;
}

let someone = new Student("John", "Yao");
```

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
rootpath: ":/a.com/"
};
</script>
<script src="less.js"></script>
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
$nav-color: #F90;
nav {
$width: 100px;
width: $width;
color: $nav-color;
}

```

```swift
enum Error:ErrorType{
case error1
case error2
}
func f1() throws{
throw(Error.error2)
}
do{
try f1()
print("no error")
}catch Error.error1{
print("has error1")
}catch Error.error2{
print("has error2")
}
```