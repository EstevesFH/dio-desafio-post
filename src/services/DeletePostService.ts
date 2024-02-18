import { getRepository } from "typeorm";
import { Post } from "../entities/Post";

interface IPost {
    id: string;
}
export class DeletePostService {
    async execute ( {id} : IPost){
        const posts = await getRepository(Post)
        .createQueryBuilder()
        .delete()
        .from(Post)
        .where("id = :id", { id })
        .execute()

        console.log(posts)
        return posts.raw
    }
}