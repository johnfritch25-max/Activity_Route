import express from "express";
const router = express.Router();

// GET /api/v1/ping
router.get("/:version/ping", (req, res) => {
    const apiVersion = req.params.version;
    console.log(`[API LOG] API pinged on version: ${apiVersion}`);

    const responseArray = [
        `API Version: ${apiVersion}`,
        "Status: OK",
        "Server: XianFire Engine"
    ];

    res.send(responseArray);
});

export default router;