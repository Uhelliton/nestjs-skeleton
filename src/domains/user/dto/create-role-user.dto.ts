import { IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleUserDto {
  @ApiProperty({
    type: Number
  })
  @IsNotEmpty()
  readonly userId: number;

  @ApiProperty({
    type: Number
  })
  @IsNotEmpty()
  readonly roleId: number;
}
