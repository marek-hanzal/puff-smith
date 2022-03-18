import {IJob} from "@leight-core/api";
import {IImportParams} from "@/puff-smith/agenda/job/import";
import {FC} from "react";
import {useQueryClient} from "react-query";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

export const ImportApiLink = "/api/file/[fileId]/import";

export type IImportQueryParams = IImportParams;

export const useImportMutation = createMutationHook<void, IJob<IImportParams>, IImportParams>(ImportApiLink, "post");

export const useImportQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ImportApiLink]);
}

export interface IImportDefaultFormProps extends Partial<IFormProps<void, IJob<IImportParams>, IImportParams>> {
}

export const ImportDefaultForm: FC<IImportDefaultFormProps> = props => <Form<void, IJob<IImportParams>, IImportParams>
	useMutation={useImportMutation}
	{...props}
/>

export const useImportLink = (): ((query: IImportQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(ImportApiLink, query);
}

export const useImportPromise = createPromiseHook<void, IJob<IImportParams>, IImportParams>(ImportApiLink, "post");