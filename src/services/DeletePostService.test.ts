import { getConnection } from "typeorm";
import  createConnection  from "../DB";
import { FakeData } from "../utils/FakeData";
import { DeletePostService } from "./DeletePostService";

describe('DeletePostService', ()=> { 
    beforeAll(async ()=> {
        const connection = await createConnection();
        await connection.runMigrations
    })

    afterAll(async ()=> {
        const connection = getConnection();
        await connection.close()
    })

    const fakeData = new FakeData();

    it('Should return an empty array when post is deleted', async ()=> {
        const mockPost = await fakeData.createPost();

        const deletePostService = new DeletePostService();

        const result = await deletePostService.execute({ id: mockPost.id })

        expect(result).toHaveLength(0)
    })
})