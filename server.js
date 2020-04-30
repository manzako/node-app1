const http=require('http');
const app=require('./app');
const chalk=require('chalk');

const port=process.env.port||4000;

const server=http.createServer(app);
server.listen(port, function(){
    console.log(`localhost:${chalk.green(port)}`);
    
});