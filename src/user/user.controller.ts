import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { CustomParseIntPipe } from 'src/common/pipes/custom-parse-int-pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { ConfigService } from '@nestjs/config';
import { UserService } from './user.service';
//import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
//import { Request } from 'express';
import { AuthenticatedRequest } from 'src/auth/types/authenticated-request';

@Controller('user')
export class UserController {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Req() req: AuthenticatedRequest, @Param('id', CustomParseIntPipe) id: number) {
    console.log(req.user.id);
    return `Olá do controller do user #${id}`;
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
}
