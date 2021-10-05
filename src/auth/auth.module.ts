import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { RedatorModule } from 'src/redator/redator.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [RedatorModule,PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      //Expiraçao do token 120 segundos
      signOptions: { expiresIn: '120s' },
    })
  ],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
