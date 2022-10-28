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


module.exports = {
    getAll,

};