import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { LoginUserDto } from "./dto/login-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("/login")
  login(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.login(loginUserDto);
  }

  @Post("/test_login")
  register(
    @Body()
    loginUserDto: {
      firstName: string;
      lastName: string;
      email: string;
    }
  ) {
    return this.usersService.register(loginUserDto);
  }
}
