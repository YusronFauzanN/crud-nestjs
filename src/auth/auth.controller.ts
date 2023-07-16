import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDTO: LoginDTO): Promise<any> {
    return this.authService.login(loginDTO);
  }

  @Post('register')
  @UseInterceptors(FileInterceptor('avatar'))
  async register(
    @UploadedFile() file: Express.Multer.File,
    @Body() RegisterDTO: RegisterDTO,
  ): Promise<any> {
    return this.authService.register(file, RegisterDTO);
  }
}
