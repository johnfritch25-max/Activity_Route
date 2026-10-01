import express from "express";
const router = express.Router();

const productsArray = ["Laptop", "Mechanical Keyboard", "Wireless Mouse", "Monitor"];

// GET /products/search/Laptop
router.get("/search/:itemName", (req, res) => {
    const { itemName } = req.params;
    console.log(`[PRODUCT LOG] Searching product catalog for: ${itemName}`);

    const results = productsArray.filter(item => 
        item.toLowerCase().includes(itemName.toLowerCase())
    );

    res.send({
        searchTerm: itemName,
        matchedProducts: results
    });
});

export default router;