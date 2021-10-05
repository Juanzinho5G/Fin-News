import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RedatorCreateDto } from './dto/create.redator.dto';
import { Redator } from './redator.model';
import { RedatorRepository } from './redator.repository';

@Injectable()
export class RedatorService {
    constructor(
        private readonly redator:RedatorRepository        
    ){}

    async cadastrar(redator:RedatorCreateDto){
        return this.redator.cadastrarRedator(redator);
    }
    async buscarPorEmail(email:string){
        return this.redator.buscar(email);
    }
}
