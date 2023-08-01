const express = require('express');
const port = 5000;
const app = express();
app.set('view engine', 'ejs');
const path = require('path')
app.use(express.static(path.join(__dirname,'public')))
app.get('/', (req, res) => {
    return res.render('index');
});
app.get('/widget',(req,res)=>{
    return res.render('widget')
})
app.get('/table',(req,res)=>{
    return res.render('table')
})
app.get('/form',(req,res)=>{
    return res.render('form')
})
app.get('/chart',(req,res)=>{
    return res.render('chart')
})
app.listen(port, (err) => {
    if (err) {
        console.log('Error in running server on ' + port);
    }
    console.log('running server on ' + port);
});