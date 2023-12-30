const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const productsFilePath = path.join(__dirname, '../../data/productdb.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));




let controllers = {
    home: function(req,res){
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('admin', {products:products})
    },
    edit: function(req,res){
        let id = req.params.id
        let producto = products.find(product => product.id == id)
        if(producto){
            return res.render('adminedit', {producto})
        }
    },
    update: function(req,res){
        let id = req.params.id
        let {name, desc, color, price} = req.body
        console.log(req.body)
        let product = products.find(product => product.id == id)
        if(product){
            product.name = name
            product.desc = desc
            product.color = color
            product.price = price
            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
            res.redirect('/admin')
        } else{
            res.send('El producto no se pudo actualizar')
        }
    },
    delete: function(req,res){
        let id = req.params.id
        products = products.filter(product => product.id != id)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
        res.redirect('/admin')
    }
}


module.exports = controllers;