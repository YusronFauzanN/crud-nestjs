import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({})
export class AuthModule {
  import: [CloudinaryModule];
  providers: [AuthService];
  controller: [AuthController];
}
