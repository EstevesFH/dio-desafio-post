import { getConnection } from "typeorm";
import  createConnection  from "../DB";
import { FakeData } from "../utils/FakeData";
import { UpdatePostService } from "./UpdatePostService";

describe('UpdatePostService', ()=> {
    beforeAll(async ()=> {
        const connection = await createConnection();
        await connection.runMigrations
    })

    afterAll(async ()=> {
        const connection = getConnection();
        await connection.query('DELETE FROM posts')
        await connection.close()
    })

    const fakeData = new FakeData();

    it('You must edit the post', async ()=> {
        const mockPost = await fakeData.createPost()

        const updatePostService = new UpdatePostService();

        const result = await updatePostService.execute({
            id: mockPost.id,
            author: 'user@gmail.com',
            content: 'Testing API'
        });

        expect(result).toHaveLength(0)
    })
})