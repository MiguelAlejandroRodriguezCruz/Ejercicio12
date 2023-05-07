const express = require("express");
const hbs= require('hbs');
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT||3000;

const app= express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials',()=>{});

//Vistas
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//Definir rutas
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/login',(req,res)=>{
    res.render('signin-one');
});

app.get('/categorias',(req,res)=>{
    res.render("advance-table");
});

app.get('/productos',(req,res)=>{
    res.render("productos");
});

app.get('*',(req,res)=>{
    res.render('404');
});

//Definir puerto
app.listen(port,()=>{
    console.log("El servidor corriendo en el puerto: ", port);
});