import { getConnection } from "typeorm";
import  createConnection  from "../DB";
import { CreatePostService } from "./CreatePostService";
import { v4 as uuid } from "uuid";

describe('CreatePostController', ()=> {
    beforeAll(async ()=> {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async ()=> {
        const connection = getConnection();
        await connection.query('DELETE FROM posts')
        await connection.close()
    })

    it('Must return the id of the created user', async ()=> {
        const createPostService = new CreatePostService();

        const result = await createPostService.execute({
            id: uuid(),
            author: 'user@gmail.com',
            content: 'Testing API'
        })

        expect(result).toHaveProperty('id')

    })
})