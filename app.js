// // console.log("first");
// // console.log(__dirname);
// // const os=require('os')

// // //information of current user
// // const user=os.userInfo();
// // console.log(user);

// // // computer time
// // const suptime=os.uptime();
// // console.log(suptime);
// const path=require('path')
// console.log(path.sep);
// const pathfile=path.join('/content','subcontent','text.txt')
// console.log(pathfile);

// const base=path.basename(pathfile)
// console.log(base);

// const absolute=path.resolve(__dirname,'content','subcontent','text.txt')
// console.log(absolute);


//fs

const  fs=require('fs')

const file=fs.readFileSync('./forfs1/forfs.txt','utf8')
console.log(file);
const write=fs.writeFileSync('./forfs1/forfsnew.txt','Fuk you niga tryna bla me on a');
console.log(write);
