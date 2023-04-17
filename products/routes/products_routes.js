import { Router } from 'express';
import * as product_controller from '../controller/product_controller.js'
// import * as product_checker from '../controllers/product_checker.js'

const router = Router();

// router.get('/', product_controller.getAllCustomers);
router.post('/', product_controller.createProduct);
// router.get('/:id', product_checker.checkCustomerById, product_controller.getCustomerById);
// router.put('/:id', product_checker.checkCustomerById, product_controller.updateCustomerById);
// router.delete('/:id', product_checker.checkCustomerById, product_controller.deleteCustomerById)
export default router;