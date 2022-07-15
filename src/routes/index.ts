import { Router } from "express";
import UserController from "../Controllers";

const endpoints: Router = Router();

endpoints.route("/")
    .get(UserController.getAll)
    .post(UserController.postOne)
    
endpoints.route("/:id")
    .get(UserController.findOne)
    .delete(UserController.destroyOne)
    .patch(UserController.patchOne);
   


export default endpoints;