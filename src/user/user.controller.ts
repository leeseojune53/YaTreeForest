import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService:UserService,
    ){}

    @Post('register')
    register(@Body() request: UserDto){
        this.userService.register(request);
    }

}
