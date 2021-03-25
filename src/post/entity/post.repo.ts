
import { EntityRepository, Repository } from "typeorm";
import { PostDto } from "../dto/post.dto";
import { Post } from "./post.entity";

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
    private newPost: Post;

    public async savePost(postDto: PostDto){
        this.newPost = this.create(postDto);
        await this.save(this.newPost);
    }

    public async findByUserName(userName: string) {
        return await this.find({userName});
    }

}