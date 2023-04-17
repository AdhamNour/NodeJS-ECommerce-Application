import { Router } from "express";
import * as cartControls from "../controller/cart_cotroller.js"


const router = Router();

router.get('/',cartControls.getAllcarts);

router.post('/',cartControls.createcart);

router.put('/:id',cartControls.updatecart);

router.delete('/:id',cartControls.deletecart);

router.get('/:id',cartControls.getcartById);

export default router;