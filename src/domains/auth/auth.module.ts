import { Module } from '@nestjs/common';
import { AuthService } from 'src/domains/auth/services/auth.service'
import { LocalStrategy } from 'src/units/auth/strategy/local.strategy'
import { UserModule } from 'src/domains/user/user.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from 'config/auth'
import { JwtStrategy } from 'src/units/auth/strategy/jwt.strategy';
import { AuthController } from '../../units/auth/http/controllers/auth.controller';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
