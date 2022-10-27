/**
 * Serializable user; this could be transferred over the network.
 */
export interface IUser {
    readonly userId?: string | null;
    readonly tokens?: string[];
}
