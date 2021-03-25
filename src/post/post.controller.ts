import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(
        private postService: PostService,
    ){}

    @Post()
    write(@Body() request: PostDto) {
        this.postService.writePost(request);
    }

}
