import { Body, Controller, Put, Param } from '@nestjs/common';
import { UserDTO } from './dto/user-update.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Put('/:id/update')
  async update(
    @Param('id') id: string,
    @Body() payload: UserDTO,
  ): Promise<any> {
    console.log({ id });
    return this.userService.update(id, payload);
  }
}
