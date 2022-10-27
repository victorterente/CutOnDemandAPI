const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');
const connectionString = process.env.DATABASE_URL
const connectionHost = process.env.DATABASE_HOST
const connectionPW = process.env.DATABASE_PASSWORD
const connectionUser = process.env.DATABASE_USER
const connectionPort = process.env.DATABASE_PORT
const connectionDatabase = process.env.DATABASE_DB



const sequelize = new Sequelize('cutondemand', 'cutondemand', 'sASohkebnznf5xM', {
    host: 'top2.nearest.of.cutondemand-db.internal',
    port: connectionPort,
    dialect: 'postgres',
    logQueryParameters: true,
    benchmark: true,
    define: {
        timestamps: false
    }

});
const modelDefiners = [
    users = require('./models/user')

    // Add more models here...
    // require('./models/item'),
];
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize, Sequelize);
}

applyExtraSetup(sequelize);

module.exports = sequelize;