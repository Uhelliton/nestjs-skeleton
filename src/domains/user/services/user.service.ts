import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { AbstractRepository } from 'src/supports/repositories/abstract.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { RoleUserEntity } from '../entities/role-user.entity'
import CreateUserDto from '../dto/create-user.dto';

@Injectable()
export class UserService extends AbstractRepository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    _repository: Repository<UserEntity>
  ) {
    super(_repository)
  }

  public async createWithRalationship(userDto: CreateUserDto) : Promise<UserEntity> {
    const user = await this.repository.save(userDto)

    const roleUser = new RoleUserEntity()
    roleUser.roleId = userDto.roleId
    roleUser.userId = user.id
    getManager().save(roleUser);
    return user
  }

  public async register(userDto: CreateUserDto) : Promise<UserEntity> {
    const { email } = userDto
    let user = await this.repository.findOne({ where: { email } })
    if (user) {
      throw new HttpException(
        'User already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    user = await this.repository.create(userDto);
    return await this.repository.save(user);
  }

  public async findByEmail(userEmail: string): Promise<any> {
    return await this.repository.findOne({ email: userEmail }, { relations: ['roleUser'] })
  }

  public async findById(id: number): Promise<any> {
    return await this.repository.findOneOrFail(id)
  }
}
