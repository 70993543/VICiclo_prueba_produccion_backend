// Rutas para producto
const {Router} = require('express')
const router = Router();
const productoController = require('../controllers/productoController')

// api/products
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;


