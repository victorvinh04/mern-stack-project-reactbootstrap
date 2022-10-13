const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => bcrypt.hashSync(password, salt);

const comparePasswords = (inputPassword, hashPassword) =>
  bcrypt.compareSync(inputPassword, hashPassword);

module.exports = {
  hashPassword,
  comparePasswords,
};
