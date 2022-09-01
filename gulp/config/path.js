import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // путь к папке с результатом
const srcFolder = `./src`; // путь к папке с исходниками

export const path = { // здесь хранится вся информация о пути к тому или иному файлу или папке
	build: {
		html: `${buildFolder}/`,
		files: `${buildFolder}/files/`
	}, // объект путей к папке с результатом
	src: {
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
	},
	watch: {
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/files/**/*.*`
	}, // пути к файлам и папкам за которыми должен следить наш gulp и при любых изменениях выполнять определенные действия
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}