import { getRepository } from "typeorm"
import { Post } from "../entities/Post";

interface IPost {
    id: string,
    author: string,
    content: string
}

export class CreatePostService {
    async execute({ id, author, content }: IPost){

        const post = await getRepository(Post)
        .createQueryBuilder()
        .insert()
        .into(Post)
        .values([
            {
            id: id,
            author: author,
            content: content
            }
        ])
        .execute();

        console.log(post.identifiers[0])

        return post.identifiers[0]
    }   
}