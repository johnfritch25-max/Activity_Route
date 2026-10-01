import express from "express";
const router = express.Router();

// 1. GET /orders/:orderId/shipped
router.get("/:orderId/shipped", (req, res) => {
    const orderId = req.params.orderId;
    console.log(`[ORDER LOG] Checking shipped status for Order #${orderId}`);
    res.send([
        { key: "OrderId", value: orderId },
        { key: "Status", value: "Shipped" },
        { key: "Carrier", value: "Express Freight" }
    ]);
});

// 2. GET /orders/:orderId/details
router.get("/:orderId/details", (req, res) => {
    const orderId = req.params.orderId;
    console.log(`[ORDER LOG] Checking details for Order #${orderId}`);
    res.send([
        { key: "OrderId", value: orderId },
        { key: "Name", value: "Laptop" }
    ]);
});

// 3. GET /orders/:orderId/ordered
router.get("/:orderId/ordered", (req, res) => {
    const orderId = req.params.orderId;
    console.log(`[ORDER LOG] Checking order status for Order #${orderId}`);
    res.send([
        { key: "OrderId", value: orderId },
        { key: "Status", value: "Ordered" },
        { key: "Carrier", value: "Express Freight" }
    ]);
});

// 4. GET /orders/:orderId/received
router.get("/:orderId/received", (req, res) => {
    const orderId = req.params.orderId;
    console.log(`[ORDER LOG] Checking received status for Order #${orderId}`);
    res.send([
        { key: "OrderId", value: orderId },
        { key: "Status", value: "Received" },
        { key: "Carrier", value: "Express Freight" }
    ]);
});

// 5. GET /orders/:orderId/review
router.get("/:orderId/review", (req, res) => {
    const orderId = req.params.orderId;
    console.log(`[ORDER LOG] Checking review status for Order #${orderId}`);
    res.send([
        { key: "OrderId", value: orderId },
        { key: "Status", value: "Review" },
        { key: "Carrier", value: "Express" }
    ]);
});

export default router;