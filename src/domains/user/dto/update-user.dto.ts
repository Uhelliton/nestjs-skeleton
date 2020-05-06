import { IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ required: false })
  readonly photo: string;

  @ApiProperty({
    type: Number
  })
  @IsNotEmpty()
  readonly roleId: number;
}
