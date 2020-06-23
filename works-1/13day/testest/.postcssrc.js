// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    'postcss-px-to-viewport':{
      viewportWidth:'720',//视窗可视区宽度
      viewpostHeight:'',
      viewpostUnit:'vmin'
    }
  }
}
