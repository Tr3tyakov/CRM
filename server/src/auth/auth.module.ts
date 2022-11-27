import { JWTConstant } from './jwt/jwt.constants';
import { UserService } from './../user/user.service';
import { UserModule } from './../user/user.module';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { JWTStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: JWTConstant.JWT_KEY,
      signOptions: { expiresIn: '10h' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JWTStrategy],
  exports: [],
})
export class AuthModule {}
