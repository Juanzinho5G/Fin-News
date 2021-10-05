import { Injectable } from '@nestjs/common';
import { RedatorService } from 'src/redator/redator.service';
import * as bcyrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    
    constructor(private redatorService: RedatorService,
      private jwtService: JwtService
      ){}

    async validateUser(email: string, senha: string): Promise<any> {
        const user = await this.redatorService.buscarPorEmail(email);
        
        if (user && (await bcyrypt.compare(senha,user.senha))) {
          const { senha, ...result } = user;
          return result;
        }
        return null;
    }
    
    async login(user: any) {
      const payload = { email: user.email, id: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
}
