// Importo PrismaClient
const { PrismaClient } = require("@prisma/client");

// Inizializzo Prisma
const prisma = new PrismaClient();

// Importo JWT
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Importo la funzione per generare lo slug
const createSlug = require("../utils/slug.js");

// Store dei Posts
const store = async (req, res) => {

    const { title, image, content, categoryId, tags } = req.body;

    // const token = req.headers.authorization.split(" ")[1];
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // const userEmail = decoded.email;
    // const user = await prisma.user.findUnique({ where: { email: userEmail } });
    // const userId = user.id;

    // Genero lo slug
    const slug = createSlug(title);

    const data = {
        title,
        slug: slug,
        image: image ? image : '',
        content,
        published: req.body.published ? true : false,
        // userId,
        tags: {
            connect: tags.map(id => ({ id: parseInt(id) }))
        }
    }

    if (categoryId) {
        data.categoryId = parseInt(categoryId);
    }

    try {
        const post = await prisma.post.create({
            data
        });
        res.status(200).send(post);
    } catch (err) {
        // next(err);
        console.error(err);
        res.status(500).send("Server Error");
    }
}


// Index dei Posts
const index = async (req, res) => {
    try {
        const where = {};
        const { published, text, page = 1, limit = 10 } = req.query;

        // Filtro pubblicato
        if (published) where.published = published === 'true';

        // Filtro text
        if (text) {
            where.OR = [
                { title: { contains: text } },
                { content: { contains: text } }
            ];
        }

        // // Paginazione
        const offset = (page - 1) * limit;

        const totalItems = await prisma.post.count({ where });
        const totalPages = Math.ceil(totalItems / limit);

        if (page > totalPages) {
            throw new Error(`La pagina ${page} non esiste.`);
        }

        const posts = await prisma.post.findMany({
            where,
            orderBy: [
                {
                    createdAt: 'desc'
                }
            ],
            include: {
                category: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                tags: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                user: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            },
            take: parseInt(limit),
            skip: parseInt(offset)
        });
        res.json({
            data: posts,
            page,
            totalItems,
            totalPages
        });
    } catch (err) {
        // next(err);
        console.error(err);
    }
}

// Show dei Posts
const show = async (req, res) => {
    try {
        const { slug } = req.params;
        const post = await prisma.post.findUnique({
            where: { slug },
            include: {
                category: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                tags: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                user: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });

        res.json(post);

    } catch (err) {
        // next(err);
        console.error(err);
    }
}

// Update dei Posts
const update = async (req, res) => {
    try {
        const { slug } = req.params;
        const { title, content, image, categoryId, tags } = req.body;

        // Genero lo slug
        const newSlug = createSlug(title);

        const data = {
            title,
            slug: newSlug,
            image: image ? image : '',
            content,
            published: req.body.published ? true : false,
            categoryId: categoryId ? categoryId : '',
            tags: {
                set: tags.map(id => ({ id }))
            }
        }

        if (categoryId) {
            data.categoryId = categoryId;
        }

        const post = await prisma.post.update({
            where: { slug },
            data
        });
        res.json(post);
    } catch (err) {
        // next(err);
        console.error(err);
        res.status(500).send("Server Error");
    }
}

// Destroy dei Posts
const destroy = async (req, res) => {
    try {
        const { slug } = req.params;
        await prisma.post.delete({
            where: { slug }
        });
        res.json(`Post con slug ${slug} eliminato con successo.`);
    } catch (err) {
        // next(err);
        console.error(err);
    }
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}