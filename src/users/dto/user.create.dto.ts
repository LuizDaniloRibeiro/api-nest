/* eslint-disable prettier/prettier */
//dto é uma interface que definomos o que vai ser transferido do front-end para o back-end 
export interface UserCreateDto{
    name: string;
    password: string;
    type: number;
    email: string;
    age: number;
    telephone: string;
    genre: string;
}

