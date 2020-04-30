const express=require('express');
const app=express();
const morgan=require('morgan');
const bodyParser=require('body-parser');
const routeUser=require('./application/routes/users');

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({

    extended:false
}));

app.use(bodyParser.json());

// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     if(req.method==='OPTIONS'){
//         res.header('Allow-Control-Allow-Methods','POST, DELETE');
//         return res.status(200).json({});
//     };
// });

app.use('/users/',routeUser);


module.exports=app;