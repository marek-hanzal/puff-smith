import {IJob} from "@leight-core/api";
import {IImportParams} from "@/puff-smith/agenda/job/import";
import {FC} from "react";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

export const ImportApiLink = "/api/leight/shared/file/[fileId]/import";

export type IImportQueryParams = IImportParams;

export const useImportMutation = createMutationHook<void, IJob<IImportParams>, IImportQueryParams>(ImportApiLink, "post");

export interface IImportDefaultFormProps extends Partial<IFormProps<void, IJob<IImportParams>, IImportQueryParams>> {
}

export const ImportDefaultForm: FC<IImportDefaultFormProps> = props => <Form<void, IJob<IImportParams>, IImportQueryParams>
	useMutation={useImportMutation}
	{...props}
/>

export const useImportLink = (): ((query: IImportQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(ImportApiLink, query);
}

export const useImportPromise = createPromiseHook<void, IJob<IImportParams>, IImportQueryParams>(ImportApiLink, "post");
