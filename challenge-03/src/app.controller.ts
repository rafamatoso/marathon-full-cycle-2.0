import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sender')
  sender(@Res() res: Response) {
    res.sendFile(join(process.cwd(), 'public/send.html'));
  }

  @Get('receiver')
  receiver(@Res() res: Response) {
    res.sendFile(join(process.cwd(), 'public/receive.html'));
  }
}
