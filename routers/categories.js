// Importo express
const express = require("express");

// Istanza di express.Router()
const router = express.Router();

// Importo la validazione del token
const validationToken = require("../middlewares/auth.js");

// Importo le funzioni dei Posts
const {
    store,
    index,
    show,
    update,
    destroy
} = require("../controllers/categories.js");

router.post('/', [validationToken], store);

router.get('/', index);

router.get('/:id', show);

router.put('/:id', [validationToken], update);

router.delete('/:id', [validationToken], destroy);

module.exports = router;