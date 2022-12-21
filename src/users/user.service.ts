/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { ResultDyo } from 'src/dto/result.dto';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dto/user.create.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> { //retorna uma promise lista de usuarios
    return this.userRepository.find();
  }

  async create(data: UserCreateDto): Promise<ResultDyo> {
    let user = new User()

    console.log(data)

    user.name = data.name
    user.password = bcrypt.hashSync(data.password, 10) //criptografando a senha
    user.type = data.type
    user.email = data.email
    user.age = data.age
    user.telephone = data.telephone
    user.genre = data.genre

    return this.userRepository.save(user)
    .then((result: any) => {
      return <ResultDyo>{
        status: true,
        mensagem: 'Usuário cadastrado com sucesso!'
      }
    })
    .catch((error: any) => {
      console.log('ERRO12', error)
      return <ResultDyo>{
        status: false,
        mensagem: 'Houve um erro ao cadastrar o usuário'
      }
    })   
  }

  async findOne(email: string): Promise<User | undefined>{
    return this.userRepository.createQueryBuilder('usuario').where('email = :email', { email })
    .getOne();
  }
}