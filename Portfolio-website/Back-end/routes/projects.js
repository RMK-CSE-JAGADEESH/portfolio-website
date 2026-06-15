const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            title: "Portfolio Website",
            description: "Personal Website"
        }
    ]);
});

module.exports = router;