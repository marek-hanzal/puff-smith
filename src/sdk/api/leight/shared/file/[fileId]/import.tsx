import {IJob} from "@leight-core/api";
import {FC} from "react";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

export const ImportApiLink = "/api/leight/shared/file/[fileId]/import";

export type IImportQueryParams = { fileId: string };

export const useImportMutation = createMutationHook<void, IJob, IImportQueryParams>(ImportApiLink, "post");

export interface IImportDefaultFormProps extends Partial<IFormProps<void, IJob, IImportQueryParams>> {
}

export const ImportDefaultForm: FC<IImportDefaultFormProps> = props => <Form<void, IJob, IImportQueryParams>
	useMutation={useImportMutation}
	{...props}
/>

export const useImportLink = (): ((query: IImportQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(ImportApiLink, query);
}

export const useImportPromise = createPromiseHook<void, IJob, IImportQueryParams>(ImportApiLink, "post");
