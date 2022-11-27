import { UserService } from './../user/user.service';
import { userDTO, UserWithID } from './../user/dto/user.dto';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async registration(userData: userDTO) {
    const { email } = userData;

    const check = await this.userService.findUser(email);
    if (check) {
      return 'Данный пользователь уже существует';
    }

    const data = await this.userService.createUser(userData);
    return { user: data, message: 'Пользователь успешно зарегистрирован' };
  }

  async authentication(userData: userDTO) {
    const { email, password } = userData;
    const check = await this.userService.validateUser(email, password);
    if (!check.status) return check.message;

    const token = this.createToken(check.user);
    return { user: check.user, token };
  }

  createToken(userData: UserWithID) {
    const { username, id } = userData;
    const payload = { username, sub: +id };
    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }
}
