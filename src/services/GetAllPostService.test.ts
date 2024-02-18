import createConnection from "../DB";
import { getConnection } from "typeorm";
import { GetAllPostService } from "./GetAllPostService";
import { FakeData } from "../utils/FakeData";

describe('GetAllPostController', ()=> { 
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

    it('Must return all created posts', async ()=> {
        await fakeData.execute()

        const expectedResponse = [
            {
                author: 'user@gmail.com',
                content: 'Testing API'
            },
            {
                author: 'testuser@gmail.com',
                content: ''
            }
        ]

        const getAllPostService = new GetAllPostService();

        const result = await getAllPostService.execute();

        expect(result).toMatchObject(expectedResponse)
    })
})