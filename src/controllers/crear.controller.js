const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const db = require('../database/models');
const Product = db.Products
const { validationResult } = require ('express-validator');

let controllers = {
    home: function(req,res){
        res.render('crear')
    },
    addproduct: function(req,res){
        let errors = validationResult(req);
        console.log(errors.mapped());
        if (errors.isEmpty()){ 
            let {productoNombre, productoDesc, productoColor, productoPrecio} = req.body
            Product.create({nombre : productoNombre, descripcion : productoDesc, precio : productoPrecio, color : productoColor})
            res.redirect('/admin')
            } else {
            res.render('crear',{
            errors: errors.array(),
            old: req.body
                })
            }    
    }
}    


module.exports = controllers;