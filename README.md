# CSSSorter

## What is this?

PostCSS＋postcss-sorterをJavaScriptで使えるようにしたものです。

## How to use

css_sorterを読み込んで使ってください。  

```javascript
<script src="css_sorter.js"></script>
<script>
// トップレベルにCSSSorterが追加されます。

// CSSを引数に与えると、Promiseを返します。
CSSSorter(input).then((output) => {
  console.log(output); // 並び変えられたCSSが返ります
});
</script>
```

## How to customize options

browserifyと、Minifyのためにuglify-jsを利用します。  
あらかじめnpmでインストールしておいてください。

```bash
npm i -g browserify uglify-js
```

1. `src/postcss-sorter.config.js` を変更します。
2. `browserify src/main.js | uglifyjs > css_sorter.js` を実行します。

