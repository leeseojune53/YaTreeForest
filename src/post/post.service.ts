import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostDto } from './dto/post.dto';
import { Post } from './entity/post.entity';
import { PostRepository } from './entity/post.repo';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepository: PostRepository,
    ){}

    async write(request: PostDto) {
        this.postRepository.write(request);
    }

    async get() {
        return this.postRepository.find()
    }

}
