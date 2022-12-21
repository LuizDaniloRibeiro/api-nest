/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({ // serve para separar todos os modulos 
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [
    ...userProviders,
    UserService,
  ],
  exports: [UserService]
})
export class UserModule {}