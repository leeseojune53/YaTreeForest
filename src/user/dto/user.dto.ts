import { IsString } from "class-validator";

export class UserDto {
    
    @IsString()
    readonly userName: string;

    @IsString()
    password: string;

    @IsString()
    readonly email: string;
    
}