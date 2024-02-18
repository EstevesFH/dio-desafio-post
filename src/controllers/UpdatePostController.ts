import { Request, Response } from "express";
import { UpdatePostService } from "../services/UpdatePostService";

export class UpdatePostController {
    async handle(request: Request, response: Response){

    const updatePostService = new UpdatePostService();
    
    try {
        const { id, author, content } = request.body

        if(id.length === 0){
            return response.status(400).json({mensage: 'The id are required!'})
        }

        if(content.length ===0){
            return response.status(400).json({mensage: 'report new content'})
        }

        await updatePostService.execute({id, author, content})

        return response.status(204).json()
        } 
        
        catch (error) {
            return response.status(500).json({mensage: 'Error'})
        }
    }
}