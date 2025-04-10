const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/", orderController.getOrders);
router.post("/", orderController.createOrder);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
