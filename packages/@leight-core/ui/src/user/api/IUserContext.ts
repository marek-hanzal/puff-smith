import {ICurrentUser} from "@leight/shared";

export interface IUserContext {
    user: ICurrentUser;
    isReady: boolean;
}
