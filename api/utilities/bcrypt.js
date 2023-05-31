const bcryptjs = require("bcryptjs");

// makeHash
const makeHash = (value, key = 10) => {
  if (value) {
    const salt = bcryptjs.genSaltSync(key);
    return bcryptjs.hashSync(value, salt);
  }
};

//compare
const compareHash = (value, hash) => {
  if (value && hash) {
    return bcryptjs.compareSync(value, hash);
  }
};

//module export
module.exports = { makeHash, compareHash };
