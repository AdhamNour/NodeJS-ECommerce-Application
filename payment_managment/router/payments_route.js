import { Router } from 'express';
import * as payments_controller from '../controller/payments_controller.js'
import * as payments_checker from '../controller/payments_checker.js'

const router = Router();

router.get('/', payments_controller.getAllPayments);
router.post('/',payments_checker.checkCCV,payments_checker.checkCardNumber,payments_checker.checkCustomerId,payments_checker.checkExpiryDate, payments_controller.createPayments);
router.get('/:id',payments_checker.checkPaymentById  ,payments_controller.getPaymentById);
router.put('/:id',payments_checker.checkPaymentById  ,payments_controller.getPaymentById);
// router.delete('/:id', payments_checker.checkCustomerById, payments_controller.deletepayments);
export default router;