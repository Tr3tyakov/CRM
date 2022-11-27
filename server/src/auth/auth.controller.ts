import { AuthService } from './auth.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { userDTO } from 'src/user/dto/user.dto';
import { JwtAuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/registration')
  async registration(@Body() userDTO: userDTO) {
    console.log(userDTO);
    return await this.authService.registration(userDTO);
  }
  @Post('/authentication')
  async authentication(@Body() userDTO: { email: string; password: string }) {
    return await this.authService.authentication(userDTO);
  }
}
