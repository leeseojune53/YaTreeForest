import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';

@Module({
  imports: [
    forwardRef(() => UserModule),
    ConfigModule,
    JwtModule.register({
      secret: 'secretkey',
      signOptions: { expiresIn: '120m' }
    }),
  ],
  providers: [AuthService, JwtModule],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}
