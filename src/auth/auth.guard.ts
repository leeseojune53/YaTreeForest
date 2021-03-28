import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService){}

  canActivate(context: ExecutionContext,): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const token: string = request.headers['authorization'];
    this.authService.validateToken(token.split(" ")[1]);

    return true;
  }


}
