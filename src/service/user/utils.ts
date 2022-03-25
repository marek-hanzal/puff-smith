import {IUser} from "@/puff-smith/service/user/interface";

export const hasToken = (user: IUser, token: string): boolean => user.tokens.filter(item => item.name === token).length > 0;
