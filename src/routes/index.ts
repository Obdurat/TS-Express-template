import { Router } from "express";
import userController from "../Controllers";

const endpoints: Router = Router();

endpoints.route("/")
    .get(userController.getAll)
    .post(userController.postOne)
    .delete(userController.deleteOne);

endpoints.route("/:id")
    .get(userController.getOne)
    .patch(userController.patchOne);
   


export default endpoints;