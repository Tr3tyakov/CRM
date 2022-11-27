import { UserService } from './user.service';
import { userDTO } from './dto/user.dto';
import { Body, Controller, Post, Get, Param, Headers } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  //authGuard()
  async getUserInfo(
    @Headers('Authorization') header: { authorization: string },
  ) {
    const token = header.authorization.split('')[1];
    return await this.userService.getUserInfo(token);
  }
}
