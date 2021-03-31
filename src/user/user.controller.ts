import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService:UserService,
        private readonly authService:AuthService,
    ){}

    @Post('register')
    register(@Body() request: UserDto){
        this.userService.register(request);
    }

    @Post('login')
    login(@Body() request: UserDto) {
        return this.authService.login(request.userName, request.password);
    }

}
