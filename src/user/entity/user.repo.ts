import { EntityRepository, Repository } from "typeorm";
import { UserDto } from "../dto/user.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    private newUser: User;

    public async signUp(userDto: UserDto){
        this.newUser = this.create(userDto);
        await this.save(this.newUser);
    }

    public async findByEmail(email: string): Promise<User> {
        return await this.findOne({email});
    }

    public async findByUserName(userName: string): Promise<User> {
        return await this.findOne({userName});
    }

}