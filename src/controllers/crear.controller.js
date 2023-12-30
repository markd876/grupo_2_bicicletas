const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const productsFilePath = path.join(__dirname, '../../data/productdb.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



let controllers = {
    home: function(req,res){
        res.render('crear')
    },
    addproduct: function(req,res){
        let {productoNombre, productoDesc, productoColor, productoPrecio} = req.body
        let newProduct = {
            id: uuidv4(),
            name:productoNombre,
            desc: productoDesc,
            color: productoColor,
            price: productoPrecio
        }
        products.push(newProduct)
        let productsJSON = JSON.stringify(products, null, '')
        fs.writeFileSync(productsFilePath, productsJSON)
        res.redirect('/admin')
    }
}


module.exports = controllers;