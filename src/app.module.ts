import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

// import modules configs
import { AuthModule } from './domains/auth/auth.module'
import { UserModule } from './domains/user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    AuthModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
