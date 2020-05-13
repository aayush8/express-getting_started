const moment = require('moment')

const logger = (req, res, next) => {
    console.log(`Request made on ${moment().format()}`);
    next();
}

module.exports = logger