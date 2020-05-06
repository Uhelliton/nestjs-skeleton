import { Controller, Get, Post, Req, Res, Body, Param, Put, Delete } from '@nestjs/common';
import { Request, Response } from 'express'
import { UserService } from 'src/domains/user/services/user.service';
import CreateUserDto from 'src/domains/user/dto/create-user.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from 'src/domains/user/dto/update-user.dto';

@ApiTags('users')
@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async all(@Res() response: Response) {
    const users = await this.userService.all()
    return response.json(users)
  }

  @Post()
  @ApiBody({ type: CreateUserDto })
  async store(@Res() response: Response, @Req() request: Request, @Body() createUserDto: CreateUserDto) {
    const userDto: CreateUserDto = request.body
    const users = await this.userService.register(userDto)
    return response.json(users)
  }

  @Put(':id')
  async update(
    @Param('id') id: number, @Res() response: Response, @Req() request: Request, @Body() updateUserDto: UpdateUserDto) {
    const userDto: any = request.body
    const users = await this.userService.update(id, updateUserDto)
    return response.json(userDto)
  }

  @Get(':id')
  async find(@Param('id') id: number, @Res() response: Response) {
    const users = await this.userService.find(id)
    return response.json(users)
  }

  @Delete(':id')
  remove(@Param('id') id: number) : string {
    return `This action removes a #${id} user`;
  }
}
