import { getConnection } from "typeorm";
import  createConnection  from "../DB";
import { FakeData } from "../utils/FakeData";
import { DeletePostController } from "./DeletePostController";
import { makeMockRequest } from "../utils/mocks/mockRequest";
import { makeMockResponse } from "../utils/mocks/mockResponse";

describe ('DeletePostController', ()=> {
    beforeAll(async ()=> {
        const connection = await createConnection();
        connection.runMigrations
    })

    afterAll(async ()=> {
        const connection = getConnection();
        await connection.close()
    })

    const fakeData = new FakeData();

    it('Should return 204 status when post is deleted', async ()=> {
        const mockPost = await fakeData.createPost()

        const deletePostController = new DeletePostController();

        const request = makeMockRequest ({
            params: {
                id: mockPost.id
            }
        });

        const response = makeMockResponse()

        await deletePostController.handle(request, response);

        expect(response.state.status).toBe(204)
    })
})