import { RedatorCreateDto } from './dto/create.redator.dto';
import { Redator } from './redator.model';
import { RedatorRepository } from './redator.repository';
export declare class RedatorService {
    private readonly redator;
    constructor(redator: RedatorRepository);
    cadastrar(redator: RedatorCreateDto): Promise<Redator>;
    buscarPorEmail(email: string): Promise<Redator>;
}
