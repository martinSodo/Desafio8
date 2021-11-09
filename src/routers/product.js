const express = require('express');
const admin = require('../middlewares/admin');
const { getAllProducts, createProduct, getProductById, updateProductById, deleteProductById } = require('../models/product');
const productRouter = express.Router();

productRouter.get('/:id?', async (req, res) => {
  let data;
  if(req.params.id) {
    data = await getProductById(req.params.id)
  }else { data = await getAllProducts(); }
  res.send({ data });
});
productRouter.get('/:id', async (req, res) => {
  const productId = req.params.id;
  const data = await getProductById(productId)
  res.send({ data })
}); 
  ///// Ruta post para crear producto con condición de administrador ///// 
productRouter.post('/', admin, async (req, res) => {
  const nuevoProducto = req.body;
  const idProductsaved = await createProduct(nuevoProducto);
  res.send({ data: idProductsaved });

});
///// Ruta update para actualizar producto con condición de administrador ///// 
productRouter.post('/:id', admin, async (req, res) => {
  const product = req.params.id;
  const productUpdate = req.body;
  const idProductUpdate = await updateProductById(product, productUpdate);
  res.send({ data: idProductUpdate });
});

///// Ruta deletear para borrar producto con condición de administrador ///// 
productRouter.delete('/:id', admin, async(req, res) => {
  const product = req.params.id;
  const idProductDelete = await deleteProductById(product);
  res.send({ data: idProductDelete });  
});
///// Exportamos el módulo ///// 
module.exports = productRouter;