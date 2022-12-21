/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { User } from './user.entity';

//Mapear forma de fazer a conexao com esse repositorio de users
export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];