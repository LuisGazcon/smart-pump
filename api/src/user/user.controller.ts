import { Body, Controller, Get, HttpCode, HttpStatus, Put, Request, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { IRequest } from '@/types/request';
import { UpdateUserCommand } from '@/user/application/commands/update-user.command';
import { GetUserDto } from '@/user/application/dtos/get-user.dto';
import { UpdateUserDto } from '@/user/application/dtos/update-user.dto';
import { GetUserQuery } from '@/user/application/queries/get-user.query';
import { User } from '@/user/domain/user';

@ApiTags('user')
@Controller('user')
export class UserController {
  public constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  public async retrieve(@Request() request: IRequest): Promise<any> {
    const user = await this.queryBus.execute<GetUserQuery, User | undefined>(
      new GetUserQuery(new GetUserDto(request.user.guid)),
    );
    return user.toPrimitives();
  }

  @Put()
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  public async update(@Request() request: IRequest, @Body() input: UpdateUserDto): Promise<any> {
    input.guid = request.user.guid;

    await this.commandBus.execute(new UpdateUserCommand(input));
  }
}
