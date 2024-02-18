import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { CreatePostService } from "../services/CreatePostService";

export class CreatePostController {
    async handle (request: Request, response: Response) {

        const createPostService = new CreatePostService();

        try {
            const author = request.body.author;
            const content = request.body.content;
            const id = uuid();

            if(author.length === 0 || content.length === 0){
                return response.status(400).json({mensage: "The author and content are required!"})
            }

            const post = await createPostService.execute({id, author, content})
            
            return response.status(201).json(post)
        }
        
        catch (error) {
            return response.status(500).json({mensage: 'Error'})
        }
    }
}