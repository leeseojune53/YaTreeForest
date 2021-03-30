import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { PostDto } from './dto/post.dto';
import { Post } from './entity/post.entity';
import { PostRepository } from './entity/post.repo';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepository: PostRepository,
    ){}

    async write(request: PostDto, user: User) {
        request.userName = user.userName;
        this.postRepository.write(request);
    }

    async get() {
        return this.postRepository.find()
    }

}
