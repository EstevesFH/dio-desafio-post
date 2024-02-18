import { getRepository } from "typeorm";
import { Post } from "../entities/Post";

export class GetAllPostService {
    async execute(){
        const posts = await getRepository(Post)
        .createQueryBuilder('posts')
        .select()
        .getMany()

        console.log(posts)
        return posts
    }
}