import { UserInterface } from "./user-interface";

export class UserModel implements UserInterface {
    public userName: string = '';
    public userPass: string = '';
    public roles?: string[] | undefined;
    public token?: string | undefined;
}
