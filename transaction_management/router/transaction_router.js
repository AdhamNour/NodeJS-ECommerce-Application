import { Router } from "express";
import { createTransaction, deleteTransaction, getAllTransactions, getTransactionById, updateTransaction } from "../controller/transaction_controller.js";
import { checkOrderId, checkOrderinDB, checkTransactionInDB } from "../controller/transaction_checker.js";

const router = Router();
router.post('/', checkOrderId, checkOrderinDB, createTransaction)
router.get('/', getAllTransactions)
router.put('/:transaction_id', checkTransactionInDB, checkOrderinDB, updateTransaction)
router.get('/:transaction_id', checkTransactionInDB, getTransactionById)
router.delete('/:transaction_id', checkTransactionInDB, deleteTransaction)

export default router;