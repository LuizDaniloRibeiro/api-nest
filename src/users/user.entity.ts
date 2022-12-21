/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //entidade
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 255})
  password: string;

  @Column('int')
  type: number;

  @Column({ length: 255})
  email: string;

  @Column()
  age: number;

  @Column({ length: 20})
  telephone: string;

  @Column({ length: 2 })
  genre: string;

}