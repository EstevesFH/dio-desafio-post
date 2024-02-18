import { CreatePostService } from '../services/CreatePostService';
import { v4 as uuid } from 'uuid';

export class FakeData{
    createPostService = new CreatePostService();

    async execute(){
        await this.createPostService.execute({
            id: uuid(),
            author: 'user@gmail.com',
            content: 'Testing API',
        })

        await this.createPostService.execute({
            id: uuid(),
            author: 'testuser@gmail.com',
            content: ''
        })
    }

    async createPost(){
        const post = await this.createPostService.execute({
            id: uuid(),
            author: 'user@gmail.com',
            content: 'Testing API',
        })

        return post
    }
}