const bcrypt = require('bcryptjs');

const createHashFromPassword = (password) => bcrypt.hashSync(password);
const compareHashFromPassword = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = {
    createHashFromPassword,
    compareHashFromPassword
}