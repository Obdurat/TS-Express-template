import { Request, Response } from "express";
import UserService from "../Services"

interface PostUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

class UserController extends UserService {

    public async getAll(_req: Request, res: Response): Promise<Response> {
        const users = await super.getUsers();
        return res.json({ response: users });
    }

    public async findOne(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const user = await super.getOne(+id);
        return res.json({ response: user });
    }

    public async postOne(req: Request<PostUser>, res: Response): Promise<Response> {
        const { body } = req
        const user = await super.createUser(body)
        return res.json({ response: user });
    }

    public async patchOne(req: Request<PostUser>, res: Response): Promise<Response> {
        const { body } = req;
        const { id } = req.params;
        const user = await super.updateOne(+id, body)
        return res.json({ response: user });
    }

    public async destroyOne(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const status = await super.deleteOne(+id);
        return res.json({ response: status });
    }
};

const userController = new UserController();

export default userController;