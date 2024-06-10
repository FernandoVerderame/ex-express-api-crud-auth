// Importo PrismaClient
const { PrismaClient } = require("@prisma/client");

// Inizializzo Prisma
const prisma = new PrismaClient();

// Importo hashPassword
const { hashPassword } = require("../utils/password.js");

// Importo generateToken
const generateToken = require("../utils/generateToken.js");

const register = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const data = {
            name,
            email,
            password: await hashPassword(password)
        }

        const user = await prisma.user.create({ data });

        const token = generateToken({
            email: user.email,
            name: user.name
        });

        delete user.id;
        delete user.password;

        res.json({ token, data: user });

    } catch (err) {
        console.error(err);
    }

}

module.exports = {
    register
}