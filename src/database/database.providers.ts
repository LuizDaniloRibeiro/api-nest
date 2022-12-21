/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'ARTDESIGN',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: false, //sicronizar com class/obj/table
      });

      return dataSource.initialize();
    },
  },
];

// export const databaseProviders = [
//     {
//       provide: 'DATA_SOURCE',
//       useFactory: async () => {
//         const dataSource = new DataSource({
//           type: 'mysql',
//           host: process.env.DB_HOST,
//           port: port,
//           username: process.env.DB_USER,
//           password: process.env.DB_PASSWORD,
//           database: process.env.DB_NAME,
//           entities: [
//               __dirname + '/../**/*.entity{.ts,.js}',
//           ],
//           synchronize: true, //sicronizar com class/obj/table
//         });
  
//         return dataSource.initialize();
//       },
//     },
//   ];