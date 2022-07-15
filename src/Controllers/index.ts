import { Request, Response } from "express";
import UserService from "../Services"

interface UserRequest {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

class UserController extends UserService {

    static async getAll(_req: Request, res: Response): Promise<Response> {
        const users = await super.getUsers();
        return res.json({ response: users });
    }

    static async findOne(req: Request<UserRequest>, res: Response): Promise<Response> {
        const { id } = req.params;
        const user = await super.getOne(+id);
        return res.json({ response: user });
    }

    static async postOne(req: Request<UserRequest>, res: Response): Promise<Response> {
        const { body } = req
        const user = await super.createUser(body)
        return res.json({ response: user });
    }

    static async patchOne(req: Request<UserRequest>, res: Response): Promise<Response> {
        const { body } = req;
        const { id } = req.params;
        const user = await super.updateOne(+id, body)
        return res.json({ response: user });
    }

    static async destroyOne(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const status = await super.deleteOne(+id);
        return res.json({ response: status });
    }
};

export default UserController;