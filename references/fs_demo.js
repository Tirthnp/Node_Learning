const fs=require('fs')
const path = require ('path')
// Create folder
/* fs.mkdir(path.join(__dirname,'/test1'),{},err=>{
    if (err) throw err;
    console.log('Folder Created...')
}) */

// Create and write to a file 

// fs.writeFile(path.join(__dirname,'/test1','hello.txt'),'Hellow People of MOses',err=>{
//     if (err) throw err;
//     console.log('Folder Created...')

//     fs.appendFile(path.join(__dirname,'/test1','hello.txt'),'I love God',err=>{
//         if (err) throw err;
//         console.log('Folder Created...')
//     })
// })

//Read File
// fs.readFile(path.join(__dirname,'/test1','hello.txt'),'utf8',(err,data)=>{
//     if (err) throw err;

//     console.log(data)
// }) 

//Rename the file
fs.rename(path.join(__dirname,'/test1','hello.txt'),path.join(__dirname,'/test1','hellomoses.txt'),(err)=>{
    if (err) throw err;
}) 