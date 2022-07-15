import * as Models from "../Database/models";
import CustomError from "../Error/CustomError";

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
    const user = await Models.User.findOne({ where: { id }});
    if (!user) throw new CustomError("User not found", 404);
    return user; 
  }

  static async createUser(body: UserModel): Promise<UserModel> {
    const user = await Models.User.build(body);
    await user.save();
    return user;
  }

  static async updateOne(id: number, body: UserModel): Promise<UserModel> {
    const user = await Models.User.findOne({ where: { id }});
    if (!user) throw new CustomError("User not found", 404);
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
