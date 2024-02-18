import { Request, Response, Router } from "express";
import { CreatePostController } from "./controllers/CreatePostController";
import { GetAllPostController } from "./controllers/GetAllPostController";
import { UpdatePostController } from "./controllers/UpdatePostController";
import { DeletePostController } from "./controllers/DeletePostController";

export const router = Router();

const createPostController = new CreatePostController();
const getAllPostController = new GetAllPostController();
const updatePostController = new UpdatePostController();
const deletePostController = new DeletePostController();

router.get('/', (request: Request, response: Response) => {
    return response.json({mensagem: 'Bem vindo à API de Posts'})
})

router.post('/posts', createPostController.handle)
router.get('/posts', getAllPostController.handle)
router.patch('/posts', updatePostController.handle)
router.delete('/posts/:id', deletePostController.handle)