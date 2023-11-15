const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(3000, ()=>{
    console.log('Servidor corriendo puerto 3000')
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'views/home.html'))
})
app.get('/carrito', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/carrito.html'))
})
app.get('/producto', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/producto.html'))
})
app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/register.html'))
})
app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/login.html'))
})