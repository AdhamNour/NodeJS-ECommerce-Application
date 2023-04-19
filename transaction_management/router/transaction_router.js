import { Router } from "express";
import { createTransaction, getAllTransactions } from "../controller/transaction_controller.js";

const router = Router();
router.post('/', createTransaction)
router.get('/', getAllTransactions)

export default router;