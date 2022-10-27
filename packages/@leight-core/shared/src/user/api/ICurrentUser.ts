import {IUser} from "@leight/shared";

/**
 * Current user is an instance of an existing user with all required data; this is just
 * a simple interface used primarily for ACL checks.
 */
export interface ICurrentUser {
    readonly user: IUser;

    required(): string;

    optional(): string | undefined;

    /**
     * Passes if user has any of the specified tokens.
     */
    hasAny(tokens?: string[]): boolean;

    /**
     * Passes if user has any of the specified tokens; otherwise an exception is thrown.
     */
    checkAny(tokens?: string[]): void;

    /**
     * Passes if user has all specified tokens.
     */
    hasTokens(tokens?: string[]): boolean;

    /**
     * Passes if user has all specified tokens.
     */
    checkTokens(tokens?: string[]): void;
}
