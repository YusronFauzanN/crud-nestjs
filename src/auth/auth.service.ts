import { Injectable, NotFoundException } from '@nestjs/common';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class AuthService {
  constructor(private readonly cloudinaryService: CloudinaryService) {}
  private database = new PrismaClient();
  async login(loginDTO: LoginDTO): Promise<any> {
    const { email, password } = loginDTO;
    const user = await this.database.user.findFirst({
      where: {
        email: email,
      },
    });

    if (user && bcrypt.compare(password, user.password)) {
      return 'Logged In';
    }
    throw new NotFoundException('Email atau Password Salah!');
  }

  async register(
    file: Express.Multer.File,
    registerDTO: RegisterDTO,
  ): Promise<any> {
    const { email, password, name } = registerDTO;
    const hashedPassword = await bcrypt.hash(password, 10);
    const { url } = await this.cloudinaryService.uploadFile(file);
    const user = await this.database.user.create({
      data: {
        email: email,
        password: hashedPassword,
        name: name,
        avatar: url,
      },
    });
    if (user) {
      return 'User Created!';
    }
  }
}
