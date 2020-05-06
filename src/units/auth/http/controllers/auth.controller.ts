import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/domains/auth/guards/jwt-auth.guard'
import { LocalAuthGuard } from 'src/domains/auth/guards/local-auth.guard'
import { AuthService } from 'src/domains/auth/services/auth.service'
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
