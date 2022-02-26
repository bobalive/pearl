// Получение имя папки проэкта

import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './app/build';
const srcFolder = './app/src';

export const path = {
    //объект путей с результатом
    build:{
        html:`${buildFolder}/`,
        style: `${buildFolder}/style/`,
        images: `${buildFolder}/images/`,
        js:`${buildFolder}/script/`,
        fonts:`${buildFolder}/fonts/`
    },
    // объект путей с исходным файлом
    src:{
        html:`${srcFolder}/*.pug`,
        style: `${srcFolder}/style/style.scss`,
        images: `${srcFolder}/**/*.{jpg,png,jpeg gif, webp}`,
        svg:`${srcFolder}/images/**/*.svg`,
        js:`${srcFolder}/script/app.js`,
        fonts:`${srcFolder}/fonts/*.ttf`
    },
    // объект пуьей к файлам и папкм за которыми нада следить
    watch:{
        html:`${srcFolder}/**/*.pug`,
        style:`${srcFolder}/**/*.scss`,
        images: `${srcFolder}/images/*.{jpg,png,jpeg gif, webp}`,
        js:`${srcFolder}/script/**/*.js`
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder,
}