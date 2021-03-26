import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostRepository } from './entity/post.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostRepository])],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule {}
