import {IContextRender} from "@leight/context";
import {ReactNode}      from "react";

export type IProviderChildren<TContext> =
    ReactNode
    | IContextRender<TContext>;
