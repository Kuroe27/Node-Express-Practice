import { error } from 'console';
import path from 'path';
import url from 'url';
import * as fs from 'fs';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// //directory
console.log(__dirname)

// //directory with the file
console.log(__filename)

// //directory name
console.log(path.basename(__dirname))

// //file name
console.log(path.basename(__filename))

// //extension name ex: js, ts, css
console.log(path.extname(__filename))

// //all {}
console.log(path.parse(__filename))

// //joining path
console.log(path.join(__dirname, 'test', 'asd.html'))

// // //creating a folder
// fs.mkdir(path.join(__dirname, 'ga23'), error => {
//     if (error) throw error;
//     console.log('Folder created');
// });

// //creating a file
// fs.writeFile(path.join(__dirname, 'ga23', 'fasdasdas.txt'), '1', error => {
//     if (error) throw error;
//     console.log('Folder created');
// });

// // //renaming a file
// fs.rename(path.join(__dirname, 'ga23', 'tes.txt'), path.join(__dirname, 'ga23', 'fasdasdas.txt'), (error) => {
//     if (error) throw error;
// });

// // //reading a file
// fs.readFile(path.join(__dirname, 'ga23', 'fasdasdas.txt'), 'utf8', (error, data) => {
//     if (error) throw error;
//     console.log(data);
// });

// // //append a file
// fs.appendFile(path.join(__dirname, 'ga23', 'fasdasdas.txt'), 'a123sdas', error => {
//     if (error) throw error;
//     console.log('Folder created');
// });