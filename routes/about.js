const express = require('express');
const router = express.Router();


router.get("/", async (req, res) => {
    res.render("base",
        {
            title: "Quem Somos Nós?",
            view: "about"
        }
    );
})

module.exports = router;