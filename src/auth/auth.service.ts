import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entity/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ){}

    async validateUser(userName: string, pass: string) {
        const user = await this.userService.findOne(userName);
        if(user && bcrypt.compare(pass, user.password)){
            const {password, ...result} = user;
            return user;
        }
        return null;
    }

    async login(userName: string, pass: string) {
        var user: User = await this.validateUser(userName, pass);
        console.log(user.id)
        const payload = { sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async validateToken(token: string) {
        return await this.userService.findById(this.jwtService.decode(token)['sub']);
    }
}
