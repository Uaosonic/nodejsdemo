const http = require('http');   //引用系统模块命令
const hostname = '127.0.0.1';
const port = 3000;

const sever = http.createServer((req , res) => {    //实例化一个http服务器
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('blah blah blah\n');
});

sever.listen(port,hostname,()=>{
    console.log(`Sever running at http://${hostname}:${port}/`);
});