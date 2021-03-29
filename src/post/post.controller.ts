import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';
import { PostDto } from './dto/post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(
        private postService: PostService,
    ){}

    @UseGuards(JwtGuard)
    @Post()
    write(@Body() request: PostDto, @Request() req) {
        console.log(req.user)
        this.postService.write(request);
    }

    @Get()
    get() {
        return this.postService.get();
    }

}
