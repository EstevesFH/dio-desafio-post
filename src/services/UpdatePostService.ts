import { getRepository } from "typeorm";
import { Post } from "../entities/Post";

interface IPost {
    id: string,
    author: string,
    content: string
}

export class UpdatePostService {
    async execute({ id, author, content}: IPost){
        const posts = await getRepository(Post)
        .createQueryBuilder()
        .update(Post)
        .set({
            author: author,
            content: content
        })
        .where("id = :id", { id })
        .execute()

        console.log(posts)
        
        return posts.raw
    }
}