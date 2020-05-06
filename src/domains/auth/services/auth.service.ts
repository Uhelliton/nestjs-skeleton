import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { UserService } from 'src/domains/user/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../interfaces/jwt-payload';
import { UserEntity } from '../../user/entities/user.entity';
import { CryptService } from 'src/supports/services/crypt.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  private readonly logger = new Logger(AuthService.name)


  async validateUserToken(payload: JwtPayload): Promise<any> {
    return await this.userService.findById(payload.id);
  }

  async validateUser(email: string, password: string): Promise<UserEntity | null> {
    const user = await this.userService.findByEmail(email)
    if (!user) {
      throw new HttpException(
        'Invalid email',
        HttpStatus.BAD_REQUEST,
      );
    }
    const match = await CryptService.comparePassword(password, user.password)

    if (user && match) {
      this.logger.log('password check success');
      const { password, ...result } = user
      return result
    }

    return null
  }


  async login(user: UserEntity) {
    return {
      user,
      token: this.jwtService.sign(user)
    }
  }

}
