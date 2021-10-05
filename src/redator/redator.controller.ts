import { Get, Put } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { RedatorCreateDto } from './dto/create.redator.dto';
import { RedatorService } from './redator.service';

@Controller('redator')
export class RedatorController {
    
    constructor(
        private readonly redatorService: RedatorService,
    ){}
    
    @Post('/cadastrar')
    async cadasatrarRedator(@Body() body:RedatorCreateDto){
        return await this.redatorService.cadastrar(body)
    }
}
