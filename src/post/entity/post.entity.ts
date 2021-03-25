import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    createAt: Date;

    @Column()
    userName: string;

    @Column()
    contents: string;

}