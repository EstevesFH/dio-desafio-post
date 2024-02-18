import { getConnection } from "typeorm";
import  createConnection  from "../DB"
import { CreatePostController } from "./CreatePostController";
import { Request } from "express";
import { makeMockResponse } from "../utils/mocks/mockResponse";

describe('CreatePostController', ()=> {
    beforeAll(async ()=> {
        const connection = await createConnection();
        connection.runMigrations
    })

    afterAll(async ()=> {
        const connection = getConnection();
        await connection.query('DELETE FROM posts')
        await connection.close()
    })

    const createPostController = new CreatePostController();

    const response = makeMockResponse();

    it('Should return status 201 when post is created', async ()=> {
        const request = {
            body: {
                author: 'user@gmail.com',
                content: 'Testing the creation of posts here in this API'
            }
        } as Request

        await createPostController.handle(request, response)
        
        expect(response.state.status).toBe(201)
    })

    it('Must return status 400 when the author is not informed', async ()=> {
        const request = {
            body: {
                author: '',
                content: 'Testing whether the post will not be created, as the author was not informed'
            }
        }as Request

        await createPostController.handle(request, response)
        
        expect(response.state.status).toBe(400)
    })

    it('Must return status 400 when the content is not informed', async ()=> {
        const request = {
            body: {
                author: 'testuser@gmail.com',
                content: ''
            }
        }as Request

        await createPostController.handle(request, response)
        
        expect(response.state.status).toBe(400)
    })
})