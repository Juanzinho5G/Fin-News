import { ConflictException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { RedatorCreateDto } from "./dto/create.redator.dto";
import { Redator } from "./redator.model";
import * as bcrypt from 'bcrypt';

@EntityRepository(Redator)
export class RedatorRepository extends Repository<Redator>{

    async cadastrarRedator(redator:RedatorCreateDto){
        const { nome,email,senha} = redator;
        
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(senha,salt)

        let reda= this.create({
            nome,
            email,
            senha:hashPassword,
        })
        try{
            return await this.save(reda);
        }catch(error){
            if(error.code == 23505){
                throw new ConflictException('usuário já cadastrado')
            }else{
                throw error;
            }
        }
    }
    async buscar(email:string){
        return await this.findOne({email})
    }
}