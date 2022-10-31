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
    create

};