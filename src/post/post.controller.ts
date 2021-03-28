import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { PostDto } from './dto/post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(
        private postService: PostService,
    ){}

    @UseGuards(AuthGuard)
    @Post()
    write(@Body() request: PostDto) {
        this.postService.write(request);
    }

    @Get()
    get() {
        return this.postService.get();
    }

}
