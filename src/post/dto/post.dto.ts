import { IsString } from "class-validator";

export class PostDto {
    @IsString()
    readonly contents: string;

    @IsString()
    userName: string;
    
}