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
        if (!dir.match(/node_modules\\.+/)){
          console.log(path.join(process.cwd(), dir))
          rimraf.windows(path.join(process.cwd(), dir)).then((worked) => {
            if (worked) {
              console.log(`Deleted: ${dir}`);
            } else {
              console.error(`Error on delete ${dir}`);
            }
          });
        }
      });
      
})
