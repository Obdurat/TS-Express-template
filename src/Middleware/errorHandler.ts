import { ErrorRequestHandler, Response, Request } from "express";

const errorHandler: ErrorRequestHandler = (err, _req: Request, res: Response, _next): Response => {
    return res.status(err.status).json({ message: err.message});
};

export default errorHandler;
