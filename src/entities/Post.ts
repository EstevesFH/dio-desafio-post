import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('posts')
export class Post {
    @PrimaryColumn()
    id: string;

    @Column()
    author: string;

    @Column()
    content: string;
}