const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { titulo: "inicio EJS" });
});

router.get("/nosotros", (req, res) => {
    res.render("nosotros", { titulo: "Nosotros EJS" });
});

router.get("/", (req, res, next) => {
    res.status(404).render("404", { titulo: "Página 404" });
});

module.exports = router;