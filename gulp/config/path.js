import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // путь к папке с результатом
const srcFolder = `./src`; // путь к папке с исходниками

export const path = { // здесь хранится вся информация о пути к тому или иному файлу или папке
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		files: `${buildFolder}/files/`
	}, // объект путей к папке с результатом
	src: {
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.pug`,
		files: `${srcFolder}/files/**/*.*`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.pug`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
		files: `${srcFolder}/files/**/*.*`
	}, // пути к файлам и папкам за которыми должен следить наш gulp и при любых изменениях выполнять определенные действия
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}