import { Request, Response } from "express";
import { DeletePostService } from "../services/DeletePostService";

export class DeletePostController {
    async handle (request: Request, response: Response){
        const deletePostService = new DeletePostService();

        try {
            const { id } = request.params;

            await deletePostService.execute({id})

            return response.status(204).json()
        } 
        
        catch (error) {
            return response.status(500).json({mensage: 'Error'})
        }
    }
}