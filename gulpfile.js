const gulp = require('gulp');
const nodemon = require('nodemon');

gulp.task('nodemon', () => {
  nodemon({
    nodeArgs: ['--debug'],
    script: 'app/index.js',
    watch: ['*'],
    ext: 'js css html pug json'
  });
});
