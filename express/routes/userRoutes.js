const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');
const user = models.toString();


async function getAll (req, res) {
    try {
        console.log(user)
        let allUsers = await models.users.findAll()
        console.log(allUsers)
        res.status(200).json(allUsers);
    }catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}
async function getById(req, res) {
    const id = getIdParam(req);
    const user = await models.users.findByPk(id, {
        include: models.roles
    });
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).send('404 - Not found');
    }
}
async function create(req, res) {
    if (req.body.id) {
        res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
    } else {
        try{
            await models.users.create(req.body);
            res.status(201).end();
        }catch (e) {
            console.log(e)
            res.status(500).end()
        }

    }
}

module.exports = {
    getAll,
    getById,
    create

};