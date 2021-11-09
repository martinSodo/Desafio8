const Contenedor = require('../../Contenedor');
const { options } = require('./databases')
const productosContenedor = new Contenedor(options, 'products');
///// Muestro todos los productos ///// 
const getAllProducts = async () => {
  const list = await productosContenedor.getAll();
  return list;
};
///// Creación de producto ///// 
const createProduct = async (product) => {
  const idProductoGuardado = await productosContenedor.save(product);
  return idProductoGuardado;
};
///// Muestra de producto ///// 
const getProductById = async(idProduct) => {
  const product = await productosContenedor.getById(idProduct);
  return product
}
///// Actualización de producto ///// 
const updateProductById = async(idProduct) => {
  const product = await productosContenedor.updateById(idProduct);
  return product;
}
///// Delete de producto ///// 
const deleteProductById = async(idProduct) => {
  const product = await productosContenedor.deleteById(idProduct)
  return product;
}
///// Exportamos módulos ///// 
module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById
};