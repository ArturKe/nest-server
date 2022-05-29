import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('users')
  async createUser(): Promise<any> {
    return this.userService.createUser();
  }
  @Get('users')
  async getUser(): Promise<any> {
    return 'getUser';
  }
}
