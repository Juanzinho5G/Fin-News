import {
    IsNotEmpty,
    IsEmail,
    Matches,
} from 'class-validator';

export class RedatorCreateDto{
    @IsNotEmpty()
    nome:string

    @IsNotEmpty()
    @IsEmail()
    email:string
    
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{message: 'senha Fraca'})
    @IsNotEmpty()
    senha:string
}