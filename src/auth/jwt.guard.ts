import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from 'src/user/entity/user.entity';
import { AuthService } from './auth.service';

interface AuthRequest extends Request {
  user: User;
}

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private authService: AuthService
  ){}

  async canActivate(context: ExecutionContext,){
    const request: AuthRequest  = context.switchToHttp().getRequest();
    const token: string = request.headers['authorization'];
    if(!token){
      throw new UnauthorizedException();
    }
    request.user = await this.authService.validateToken(token.split(" ")[1]);

    return true;
  }
}
