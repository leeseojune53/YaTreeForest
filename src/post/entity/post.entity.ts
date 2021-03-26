import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createAt: Date;

    @Column()
    userName: string;

    @Column()
    contents: string;

}