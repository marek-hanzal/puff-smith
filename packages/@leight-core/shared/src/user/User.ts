import {
    AclError,
    ICurrentUser,
    IUser,
    UndefinedUserError
}                   from "@leight/shared";
import {ArrayUtils} from "@leight/utils";

export const User = (user: IUser | undefined = {}): ICurrentUser => {
    const $user: ICurrentUser = ({
        user,
        required:    () => {
            if (!user.userId) {
                throw new UndefinedUserError("User not available");
            }
            return user.userId;
        },
        optional:    () => user.userId || undefined,
        hasAny:      $tokens => $tokens && $tokens.length > 0 ? ArrayUtils.intersect(user?.tokens, $tokens).length > 0 : true,
        checkAny:    $tokens => {
            if (!$user.hasAny($tokens)) {
                throw new AclError("User does not have required tokens.", user?.tokens, $tokens);
            }
        },
        hasTokens:   $tokens => $tokens && $tokens.length > 0 ? ArrayUtils.diff($tokens, user?.tokens).length === $tokens.length : true,
        checkTokens: $tokens => {
            if (!$user.hasTokens($tokens)) {
                throw new AclError("User does not have required tokens.", user?.tokens, $tokens);
            }
        }
    });

    return $user;
};
