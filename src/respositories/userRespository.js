const User = require("../models/user");
const bcrypt = require("bcrypt");

class UserRepository {
  constructor() {}

  async findAll() {
    return await User.findAll();
  }
  async findById(id) {
    return await User.findByPk(id);
  }

  async save(user) {
    //* Se encripta la contraseña mediante bcrypt
    user.password = await bcrypt.hash(user.password, 10);
    return await User.create(user);
  }

  async update(id, user) {
    return await User.update(user, { where: { id } });
  }

  async remove(id) {
    return await User.destroy({ where: { id } });
  }

  async findByEmail(email) {
    return await User.findOne({ where: { email } });
  }
  //todo [FIX ME]
  /*
  async findAllWithPagination(filter, options) {
    return await User.paginate(filter, options);
  }

  





 */
}

module.exports = UserRepository;
