import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UserDto } from './user/dto/user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ){}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  login(@Body() request: UserDto) {
    return this.authService.login(request.userName, request.password);
  }

}
