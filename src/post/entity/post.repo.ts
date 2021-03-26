import { EntityRepository, Repository } from "typeorm";
import { PostDto } from "../dto/post.dto";
import { Post } from "./post.entity";

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
    private newPost: Post;

    public async write(postDto: PostDto) {
        postDto.userName = "leeseojune";
        this.newPost = this.create(postDto);
        await this.save(this.newPost);
    }

    public async findByUser(userName: string) {
        return this.find({userName: userName});
    }

}