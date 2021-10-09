import { RedatorService } from 'src/redator/redator.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private redatorService;
    private jwtService;
    constructor(redatorService: RedatorService, jwtService: JwtService);
    validateUser(email: string, senha: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
