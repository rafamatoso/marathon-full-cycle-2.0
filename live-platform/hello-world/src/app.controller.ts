import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // This decorator create a root route '/'
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // this action access a root route
  getHello(): string {
    return this.appService.getHello();
  }
}
