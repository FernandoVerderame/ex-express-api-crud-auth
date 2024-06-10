// Importo express
const express = require("express");

// Istanza di express.Router()
const router = express.Router();

// Importo il validatore
const validator = require("../middlewares/validator.js");

// Importo le validazioni dell'users
const { registerBody } = require("../validations/users.js");

const {
    register
} = require("../controllers/auth.js");


// Rotta registrazione
router.post('/register', validator(registerBody), register);

module.exports = router;