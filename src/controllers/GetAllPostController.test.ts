import { getConnection } from "typeorm";
import  createConnection  from "../DB";
import { FakeData } from "../utils/FakeData";
import { GetAllPostController } from "./GetAllPostController";
import { makeMockRequest } from "../utils/mocks/mockRequest";
import { makeMockResponse } from "../utils/mocks/mockResponse";

describe('GetAllPostController', ()=> {
    beforeAll(async ()=> {
        const connection = await createConnection();
        connection.runMigrations
    })

    afterAll(async ()=> {
        const connection = getConnection();
        await connection.query('DELETE FROM posts')
        await connection.close()
    })

    const fakeData = new FakeData();

    it('Should return status 200 when capturing all posts', async ()=> {
        await fakeData.execute()

        const getAllPostController = new GetAllPostController();

        const request = makeMockRequest({})

        const response = makeMockResponse()

        await getAllPostController.handle(request, response)

        expect(response.state.status).toBe(200)
    })
})