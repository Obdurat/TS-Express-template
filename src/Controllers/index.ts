import { Request, Response } from "express";

class GenericController {

    public getAll(_req: Request, res: Response): Response {
        return res.json({ response: 'Got all' });
    }

    public getOne(_req: Request, res: Response): Response {
        return res.json({ response: 'Got one' });
    }

    public postOne(_req: Request, res: Response): Response {
        return res.json({ response: 'Posted One' });
    }

    public patchOne(_req: Request, res: Response): Response {
        return res.json({ response: 'Patched One' });
    }

    public deleteOne(_req: Request, res: Response): Response {
        return res.json({ response: 'Deleted One' });
    }
};

const genericController = new GenericController();

export default genericController;