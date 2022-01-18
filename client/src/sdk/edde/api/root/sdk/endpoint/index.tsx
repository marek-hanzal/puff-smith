import {
	createGetMutation,
	createGetQuery
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type IDownloadQueryParams = void;


export const useDownloadQuery = createGetQuery<IDownloadQueryParams, void | undefined>("Edde.Root.Sdk.Download");
export const useDownloadQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Root.Sdk.Download"])
}