import { Router } from 'express';
import * as customerController from '../controllers/customer_controller.js'

const router = Router();

router.get('/', customerController.getAllCustomers);
router.post('/', customerController.createCustomer);
router.get('/:id', customerController.checkCustomerById, customerController.getCustomerById);
router.put('/:id', customerController.checkCustomerById, customerController.updateCustomerById);
router.delete('/:id', customerController.checkCustomerById, customerController.deleteCustomerById)
export default router;