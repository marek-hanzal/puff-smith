import {
    Context,
    IProviderChildren,
    useValue
} from "@leight/context";
import {
    IUser,
    User
} from "@leight/shared";
import {
    IUserContext,
    UserContext
} from "@leight/ui";
import {
    FC,
    ReactNode,
} from "react";

export interface IUserProviderProps {
    logo?: ReactNode;
    user: IUser;
    children?: IProviderChildren<IUserContext>;
}

export const UserProvider: FC<IUserProviderProps> = ({user, children}) => {
    const $user = User(user);
    return <UserContext.Provider
        value={useValue(() => ({
            user: $user,
            get isReady() {
                return !!$user.userId;
            },
        }), [$user.userId])}
    >
        {Context.render(children, UserContext)}
    </UserContext.Provider>;
};
