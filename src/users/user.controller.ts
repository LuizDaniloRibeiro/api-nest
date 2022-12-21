/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserCreateDto } from './dto/user.create.dto';
import { ResultDyo } from 'src/dto/result.dto';
import { AuthGuard } from '@nestjs/passport/dist';
import { AuthService } from 'src/auth/auth.service';


@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private authService: AuthService
    ) { }

    @Get('list')
    async list(): Promise<User[]> {
        return this.userService.findAll()
    }

    @Post('register')
    async register(@Body() data: UserCreateDto): Promise<ResultDyo> {
        return this.userService.create(data)
    }

    @UseGuards(AuthGuard('local')) //guard autenticação (local é o email e senha)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user)
    }
}