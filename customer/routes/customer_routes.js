import { Router } from 'express';
import * as customerController from '../controllers/customer_controller.js'

const router = Router();

router.get('/:id', customerController.getCustomerById);
router.put('/:id', customerController.updateCustomerById);
router.delete('/:id', customerController.deleteCustomerById)
router.post('/', customerController.createCustomer)
export default router;