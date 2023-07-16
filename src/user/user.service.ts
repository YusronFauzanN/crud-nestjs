import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDTO } from './dto/user-update.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  private database = new PrismaClient();

  async update(id: string, userDTO: UserDTO): Promise<any> {
    const { name, avatar } = userDTO;
    const user = await this.database.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: name,
        avatar: avatar,
      },
    });
    return 'Update Success!';
  }
}
