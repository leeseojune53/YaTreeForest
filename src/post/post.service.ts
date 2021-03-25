import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostRepository } from './entity/post.repo'
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepository: PostRepository,
    ){}

    writePost(request: PostDto) {
        this.postRepository.savePost(request);
    }

}
