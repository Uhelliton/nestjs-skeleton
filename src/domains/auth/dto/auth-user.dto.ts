import { IsNotEmpty } from 'class-validator'

export class AuthUserDto {
  @IsNotEmpty()
  readonly username: string

  @IsNotEmpty()
  readonly password: string
}
