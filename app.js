const express=require('express');
const path = require('path');  
const rootdir=require('./util/path');
const app=express();
const bodyParser=require('body-parser');
const userroute=require('./route/user');
const bookroute=require('./route/book');
// middleware
app.use(bodyParser.urlencoded({extended:false}));
// use css file all over the project
app.use(express.static(path.join(rootdir, 'public')));
app.use('/user',userroute);
app.use('/book',bookroute);



app.use((req,res)=>{
 res.sendFile(path.join(rootdir, 'view', 'error.html'));
});
app.get('/',(req,res)=>{
    res.sendFile(path.join(rootdir, 'view', 'index.html'));
});

app.listen(3000,()=>
    {
        console.log("working");
    });