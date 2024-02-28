const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

/* const productsFilePath = path.join(__dirname, '../../data/productdb.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

const db = require('../database/models')
const products = db.Products
const id = db.Products.id



let controllers = {
    home: function(req,res){
        db.Products.findAll()
            .then ((products)=>{
        res.render('admin', {products:products})
    })
    },
    edit: async function(req,res){
        try{
            let producto = await db.Products.findByPk(req.params.id);
            return res.render('adminedit', {producto})
        } catch (error) {
            console.error(error);
        }
        

    },
    update: function(req,res){
        db.Products.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            color: req.body.color
        },  {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/admin')
    },
    delete: function(req,res){
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/admin')
    }
}


module.exports = controllers;