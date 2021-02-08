# docsify-plugin-carbon

A plugin to make you easy to add [Carbon Ads](https://www.carbonads.net/) to docsify.

![npm](https://img.shields.io/npm/dy/docsify-plugin-carbon?style=flat-square)

# Usage

```
<script src="//cdn.jsdelivr.net/npm/docsify-plugin-carbon@1.0.3/index.min.js"></script>
```

```
window.$docsify = {
  plugins: [
    // change to your Carbon property id
    DocsifyCarbon.create('CE7I52QU', 'xmakeio')
  ]
}
```

# Example

See example site: [xmake.io](https://xmake.io/#/getting_started)

![](https://cdn.jsdelivr.net/gh/waruqi/docsify-plugin-carbon@master/sample.png)

# Contributing

(Requires [`node.js`](https://nodejs.dev) for minification)

1. Fork this repo
2. Modify `index.js`
3. Run the following command from your terminal / CLI:

   ```shell
   npx terser index.js -o index.min.js
   ```
4. Create a [pull request](https://github.com/waruqi/docsify-plugin-carbon/pulls) on GitHub
