import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern,EventPattern } from '@nestjs/microservices'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({type:'auth', action: 'login'})
  async login(payload): Promise<any>{
      console.log(payload)
      return 'Logging you in'
  }
}
