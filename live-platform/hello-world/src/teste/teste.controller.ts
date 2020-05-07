import { AppService } from './../app.service';
import { Controller, Get } from '@nestjs/common';

const name: string = 'Rafael Matoso';

@Controller('teste') // route '/teste'
export class TesteController {
  constructor(private appService: AppService) {}

  @Get('hello-world') // route 'teste/hello-world'
  index() {
    return this.appService.getHello() + name;
  }
}
