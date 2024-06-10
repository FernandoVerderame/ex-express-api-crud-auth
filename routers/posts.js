// Importo express
const express = require("express");

// Istanza di express.Router()
const router = express.Router();

// Importo il validatore
const validator = require('../middlewares/validator.js');

// Importo il validatore dello slug
const validationSlug = require("../validations/validationSlug.js");

// Importo il bodyData
const bodyData = require("../validations/posts.js");

// Importo la validazione del token
const validationToken = require("../middlewares/auth.js");

const verifyOwnership = require("../middlewares/authUser.js");

// Importo le funzioni dei Posts
const {
    store,
    index,
    show,
    update,
    destroy
} = require("../controllers/posts.js");

router.post('/', [validationToken, validator(bodyData)], store);

router.get('/', index);

// Validatore dello slug
router.use('/:slug', validator(validationSlug));

router.get('/:slug', show);

router.put('/:slug', [validationToken, verifyOwnership, validator(bodyData)], update);

router.delete('/:slug', [validationToken, verifyOwnership], destroy);

module.exports = router;