import { Router } from "express";
import genericController from "../Controllers";

const endpoints: Router = Router();

endpoints.route("/")
    .get(genericController.getAll)
    .post(genericController.postOne)
    .delete(genericController.deleteOne)
    .patch(genericController.patchOne);


export default endpoints;