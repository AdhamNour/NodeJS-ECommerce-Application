import { Router } from "express";
import * as orderControls from "../controller/order_cotroller.js"


const router = Router();

router.get('/',orderControls.getAllOrders);

router.post('/',orderControls.createOrder);

router.put('/:id',orderControls.updateOrder);

router.delete('/:id',orderControls.deleteOrder);

router.get('/:id',orderControls.getOrderById);

export default router;