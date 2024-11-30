import { Body, Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';

import { CreateTokenCommand } from '@/auth/application/commands/create-token.command';
import { CreateTokenDto } from '@/auth/application/dtos/create-token.dto';
import { LogInDto } from '@/auth/application/dtos/log-in.dto';
import { LocalAuthGuard } from '@/auth/local-auth.guard';
import { IRequest } from '@/types/request';

@ApiTags('auth')
@Controller('/auth')
export class AuthController {
  public constructor(private readonly commandBus: CommandBus) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  public async logIn(@Request() request: IRequest, @Body() input: LogInDto): Promise<{ accessToken: string }> {
    const token = await this.commandBus.execute<CreateTokenCommand, string>(
      new CreateTokenCommand(new CreateTokenDto(request.user.guid, request.user.email)),
    );
    return { accessToken: token };
  }
}
