#!/usr/bin/env node

const {glob} = require('glob');
const {rimraf} = require('rimraf');
const path = require('path');

console.log("Starting...")

glob('**/node_modules').then((folders) => {
    if (folders.length === 0) {
        console.log('No node_modules folder found in this directory');
        return;
    }
    
    folders.forEach((dir) => {
        console.log(path.join(process.cwd(), dir))
        rimraf.windows(path.join(process.cwd(), dir)).then((worked) => {
          if (worked) {
            console.log(`Deleted: ${dir}`);
          } else {
            console.error(`Error on delete ${dir}`);
          }
        });
      });
})



// // Buscar todos os diretórios node_modules a partir do diretório atual
// glob('**/node_modules', { cwd: process.cwd() }, (err, matches) => {
//     console.log("Started.")
//   if (err) {
//     console.error('Erro ao buscar node_modules:', err);
//     process.exit(1);
//   }

//   if (matches.length === 0) {
//     console.log('Nenhuma pasta node_modules encontrada.');
//     return;
//   }

//   console.log(`Encontradas ${matches.length} pastas node_modules. Excluindo...`);

//   // Excluir cada diretório encontrado
//   matches.forEach((dir) => {
//     rimraf(path.join(process.cwd(), dir), (rimrafErr) => {
//       if (rimrafErr) {
//         console.error(`Erro ao excluir ${dir}:`, rimrafErr);
//       } else {
//         console.log(`Excluído: ${dir}`);
//       }
//     });
//   });
// });
