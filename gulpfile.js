// подключаем основной модуль
import gulp from 'gulp'
// импорт путей
import {path} from './gulp/config/path.js';
import {plugins} from './gulp/config/plugins.js'

// передаем значение в глобальгую пепеиенную
global.app ={
    path,
    gulp,
    plugins
}
// иморт задачи

import {html} from './gulp/tasks/html.js';
import {server} from './gulp/tasks/server.js';
import {reset} from './gulp/tasks/reset.js';
import {style} from './gulp/tasks/style.js';
import {images} from './gulp/tasks/images.js';
import {js} from './gulp/tasks/js.js'
import {ttfToWoff} from './gulp/tasks/fonts.js'
// наблюдатель за изменениями в файлах
function watcher(){
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.style , style)
    gulp.watch(path.watch.images , images)
    gulp.watch(path.watch.js , js)
}

// основные задачи
const mainTask = gulp.series(ttfToWoff, gulp.parallel(html, style,images, js))


// построение сценариев выполнения
const dev = gulp.series(reset, mainTask , gulp.parallel(watcher , server))

const build = gulp.series(reset, mainTask)


// экспорт сценариев
export {dev, build}

// выполнеие сценариев по умолчанию
gulp.task('default' , dev);
