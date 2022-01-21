import {
	createGetMutation,
	createGetQuery
} from "@leight-core/leight";
import {useQueryClient} from "react-query";

export type IExecuteQueryParams = {
	jobId: string;
}


export const useExecuteQuery = createGetQuery<IExecuteQueryParams, any>("Edde.Root.Job.Execute");
export const useExecuteQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries(["Edde.Root.Job.Execute"])
}