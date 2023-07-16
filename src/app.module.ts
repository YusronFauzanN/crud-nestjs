import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [AuthModule, UserModule, CloudinaryModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
