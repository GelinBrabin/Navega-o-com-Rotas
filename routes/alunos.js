const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    res.render("base",
        {
            title: "Alunos",
            view: "alunos/show"
        }
    );
})

router.get("/add", async (req, res) => {
    res.render(
        "base",
        {
            title: "Adicionar alunos",
            view: "alunos/add"
        }
    );
})

router.get("/edit", async (req, res) => {
    res.render(
        "base",
        {
            title: "Editar alunos",
            view: "alunos/edit"
        }
    );
})

module.exports = router;