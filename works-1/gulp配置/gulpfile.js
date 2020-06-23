//1.引入模块

// 为什么不能使用const
var gulp = require('gulp');
var less = require('less');
var  gulpLess = require('gulp-less'); //less转换css
var  cssmin = require('gulp-cssmin')//css压缩模块
var  concat = require('gulp-concat') // js合并模块
var  uglify = require('gulp-uglify') //js压缩模块
var rename = require('gulp-rename') // 重命名
var open = require('open');  //打开
var connect = require('gulp-connect') // 热更新 
var imagemin = require('gulp-imagemin') // 图片压缩


gulp.task('html',function(){
    //写要做任务的代码
    //吧src下面的文件拷贝一份到build、dist各一份
    //1.找到源文件的   相对路径  相对于gulpfile的路径
    // 一个*代表所有html，两个**代表src下面所有子目录下的html
    gulp.src('src/**/*.html')
       //写相对路径
      .pipe(gulp.dest('build/'))
      .pipe(gulp.dest('dist/'))
      .pipe(connect.reload())// 实时刷新

});

//less 转换为css引入，外部插件
gulp.task('less',function(){
     gulp.src('src/**/*.less')
        .pipe(concat('style/style.css'))
          .pipe(gulpLess())
          .pipe(gulp.dest('build/'))
          //压缩css
          .pipe(cssmin())
          .pipe(gulp.dest('dist/'))
          .pipe(connect.reload())
});

//js压缩
gulp.task('js',function(){
     gulp.src('src/**/*.js')
          .pipe(concat('js/index.js')) //找到所有的js合并到一个目录
          .pipe(gulp.dest('build/js'))
          .pipe(uglify()) //压缩js
          //{suffix:'min'} rename 可以接收一个对象，在js文件后面添加一个min
          .pipe(rename('index.min.js'))
          .pipe(gulp.dest('dist/js'))
          .pipe(connect.reload())
});

//命名default  就代表gulp的时候回默认执行
gulp.task('build',['html','less','js']);


gulp.task('server',['build'],function(){
    //设置服务器
      connect.server({
          root:['build/'],//要运行那个目录
          livereload:true, //时候开启热更新
          port:9999
      })
     //监听任务
      gulp.watch('src/**/*.html',['html']);
      gulp.watch('src/**/*.less',['less']);
      gulp.watch('src/**/*.js',['js']);
      //通过浏览器吧指定的地址打开  http：//localhost：6666
      open('http://localhost:9999');
});

//指定一个默认的任务
gulp.task('default',['server']);