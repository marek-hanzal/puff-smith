import {Context}           from "@leight/context";
import {ISelectionContext} from "@leight/selection";

export const [
                 SelectionContext,
                 useSelectionContext,
                 useOptionalSelectionContext,
             ] = Context.factory<ISelectionContext<any>>("SelectionContext");
