import { Router } from 'express';
import * as customerController from '../controllers/customer_controller.js'
import * as customerChecker from '../controllers/customer_checker.js'

const router = Router();

router.get('/', customerController.getAllCustomers);
router.post('/', customerController.createCustomer);
router.get('/:id', customerChecker.checkCustomerById, customerController.getCustomerById);
router.put('/:id', customerChecker.checkCustomerById, customerController.updateCustomerById);
router.delete('/:id', customerChecker.checkCustomerById, customerController.deleteCustomerById)
export default router;