import * as Models from "../Database/models";

interface UserModel {
  firstName: string;
  lastName: string;
  email: string;
}

class UserService {

  static async getUsers(): Promise<UserModel[]> {
    const users = await Models.User.findAll();
    return users
  }

  static async getOne(id: any): Promise<UserModel> {
    console.log(id.params);
    const user = await Models.User.findOne({ where: { id }});
    return user; 
  }

  static async createUser(body: UserModel): Promise<UserModel> {
    const user = await Models.User.build(body);
    await user.save();
    return user;
  }

  static async updateOne(id: number, body: UserModel): Promise<UserModel> {
    const user = await Models.User.findOne({ where: { id }});
    user.update(body);
    await user.save();
    return user;
  }

  static async deleteOne(id: number): Promise<string> {
    await Models.User.destroy({ where: { id }});
    return `User ${id} Deleted`;
  }
}

export default UserService;
