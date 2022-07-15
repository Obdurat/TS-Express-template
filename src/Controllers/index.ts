import { Request, Response } from "express";
import UserService from "../Services"
import controllerWrapper from "../Utils/ControllerWrapper";

interface UserRequest {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

class UserController extends UserService {

    static getAll = controllerWrapper(async (_req: Request, res: Response): Promise<Response> => {
        const users = await super.getUsers();
        return res.json({ response: users });
    })

    static findOne = controllerWrapper(async (req: Request<UserRequest>, res: Response): Promise<Response> => {
        const { id } = req.params;
        const user = await super.getOne(+id);
        return res.json({ response: user });
    })

    static postOne = controllerWrapper(async (req: Request<UserRequest>, res: Response): Promise<Response> => {
        const { body } = req
        const user = await super.createUser(body)
        return res.json({ response: user });
    })

    static patchOne = controllerWrapper(async (req: Request<UserRequest>, res: Response): Promise<Response> => {
    const { body } = req;
    const { id } = req.params;
        const user = await super.updateOne(+id, body)
        return res.json({ response: user });
    })

    static destroyOne = controllerWrapper(async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        const status = await super.deleteOne(+id);
        return res.json({ response: status });
    })
};

export default UserController;