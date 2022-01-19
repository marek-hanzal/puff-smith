import {
	createDeleteMutation,
	createDeleteQuery
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type IDropCacheQueryParams = void;


export const useDropCacheMutation = createDeleteMutation<IDropCacheQueryParams, void | undefined>("Edde.Root.Cache.DropCache");