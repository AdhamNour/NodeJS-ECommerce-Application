import { Router } from 'express';
import * as product_controller from '../controller/product_controller.js'
import * as product_checker from '../controller/product_checker.js'

const router = Router();

router.get('/', product_controller.getAllProducts);
router.post('/', product_controller.createProduct);
router.get('/:id', product_checker.checkProductById, product_controller.getProductById);
router.put('/:id', product_checker.checkProductById, product_controller.updateProduct);
router.delete('/:id', product_checker.checkProductById, product_controller.deleteProduct);
export default router;