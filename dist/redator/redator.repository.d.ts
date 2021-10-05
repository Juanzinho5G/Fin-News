import { Repository } from "typeorm";
import { RedatorCreateDto } from "./dto/create.redator.dto";
import { Redator } from "./redator.model";
export declare class RedatorRepository extends Repository<Redator> {
    cadastrarRedator(redator: RedatorCreateDto): Promise<Redator>;
    buscar(email: string): Promise<Redator>;
}
