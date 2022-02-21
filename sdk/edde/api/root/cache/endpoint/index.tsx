import {createDeleteMutation} from "@leight-core/leight";

export type IDropCacheQueryParams = void;


export const useDropCacheMutation = createDeleteMutation<IDropCacheQueryParams, void | undefined>("Edde.Root.Cache.DropCache");
