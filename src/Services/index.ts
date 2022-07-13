const Models = require("../Database/models");

interface UserModel {
  firstName: string;
  lastName: string;
  email: string;
}

class UserService {

  public async getUsers(): Promise<UserModel[]> {
    const users = await Models.User.findAll();
    return users
  }

  public async getOne(id: number): Promise<UserModel> {
    const user = await Models.User.findOne({ where: { id }});
    return user; 
  }

  public async createUser(body: UserModel): Promise<UserModel> {
    const user = await Models.User.build(body);
    await user.save();
    return user;
  }

  public async updateOne(id: number, body: UserModel): Promise<UserModel> {
    const user = await Models.User.findOne({ where: { id }});
    user.update(body);
    user.save();
    return user;
  }

  public async deleteOne(id: number): Promise<string> {
    await Models.User.destroy({ where: { id }});
    return `User ${id} Deleted`;
  }
}

export default UserService;
