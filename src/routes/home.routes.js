import { Router } from "express";
import { getAllItems } from "../controllers/home.controller.js";
import validateAuth from "../middlewares/validateAuth.js"; // ---> validateAuth can be used to check if header Authorization is valid and or for example, lives in the database?!
import { NewItemSchema } from "../schemas/main.schemas.js"; // ---> NewItemSchema can be used as a middleware to validate an item structure

const homeRouter = Router();

homeRouter.get('/all-items', getAllItems); 

export default homeRouter;