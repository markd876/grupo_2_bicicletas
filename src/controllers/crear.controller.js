const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const db = require('../database/models');
const Product = db.Products


let controllers = {
    home: function(req,res){
        res.render('crear')
    },
    addproduct: function(req,res){
        let {productoNombre, productoDesc, productoColor, productoPrecio} = req.body
        Product.create({nombre : productoNombre, descripcion : productoDesc, precio : productoPrecio, color : productoColor})
        res.redirect('/admin')
    }
}


module.exports = controllers;