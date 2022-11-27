import { IsNotEmpty, IsEmail, IsString, IsNumber } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class userDTO {
  @IsNotEmpty()
  @IsString()
  username?: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
}

export class UserWithID extends userDTO {
  @PrimaryGeneratedColumn()
  id: number;
}
