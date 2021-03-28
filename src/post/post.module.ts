import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostRepository } from './entity/post.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './post.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([PostRepository]), AuthModule],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule {}
