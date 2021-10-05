import { RedatorCreateDto } from './dto/create.redator.dto';
import { RedatorService } from './redator.service';
export declare class RedatorController {
    private readonly redatorService;
    constructor(redatorService: RedatorService);
    cadasatrarRedator(body: RedatorCreateDto): Promise<import("./redator.model").Redator>;
}
