import { User } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { userDTO, UserWithID } from './dto/user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findUser(email) {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async createUser(userData: userDTO) {
    const { password, email, username } = userData;
    const hashPassword = await bcrypt.hash(password, 5);

    const newUser = await this.userRepository.create({
      username,
      email,
      password: hashPassword,
    });
    return await this.userRepository.save(newUser);
  }

  async validateUser(
    email,
    password,
  ): Promise<{ status: boolean; message?: string; user?: UserWithID }> {
    const userData = await this.findUser(email);
    if (!userData)
      return { status: false, message: 'Данного пользователя не существует' };

    const checkPassword = await bcrypt.compare(password, userData.password);
    if (!checkPassword)
      return { status: false, message: 'Пароли не совпадают' };

    return { status: true, user: userData };
  }

  async getUserInfo(token) {}
}
