import {Context}      from "@leight/context";
import {IUserContext} from "@leight/ui";

export const [
                 UserContext,
                 useUserContext,
                 useOptionalUserContext,
             ] = Context.factory<IUserContext>("UserContext");
