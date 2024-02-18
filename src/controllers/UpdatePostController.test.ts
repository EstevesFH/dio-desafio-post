import { getConnection } from "typeorm";
import  createConnection  from "../DB";
import { Request } from "express";
import { makeMockResponse } from "../utils/mocks/mockResponse";
import { UpdatePostController } from "./UpdatePostController";
import { FakeData } from "../utils/FakeData";

describe('UpdatePostController', ()=> {
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

    it('Should return status 204 when post is edited', async ()=> {
        const mockPost = await fakeData.createPost()

        const updatePostController = new UpdatePostController();

        const request = {
            body: {
                id: mockPost.id,
                content: 'Testing'
            }
        } as Request

        const response = makeMockResponse();

        await updatePostController.handle(request, response)

        expect(response.state.status).toBe(204)

    })
})