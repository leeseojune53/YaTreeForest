import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './entity/user.entity';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './entity/user.repo';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: UserRepository,
    ){}

    async register(request: UserDto){
        if(await this.userRepository.findByEmail(request.email)){
            throw new BadRequestException("Email is already registered");
        }
        if(await this.userRepository.findByUserName(request.userName)){
            throw new BadRequestException("UserName is already registered");
        }

        request.password = await bcrypt.hash(request.password, 10); 
        await this.userRepository.signUp(request);
    }

    

}
