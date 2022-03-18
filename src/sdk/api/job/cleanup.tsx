import {IJobFilter} from "@/puff-smith/service/job";
import {FC} from "react";
import {useQueryClient} from "react-query";
import {createMutationHook, createPromiseHook, Form, IFormProps, useLinkContext} from "@leight-core/client";

export const CleanupApiLink = "/api/job/cleanup";

export type ICleanupQueryParams = undefined;

export const useCleanupMutation = createMutationHook<IJobFilter | undefined, boolean>(CleanupApiLink, "post");

export const useCleanupQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CleanupApiLink]);
}

export interface ICleanupDefaultFormProps extends Partial<IFormProps<IJobFilter | undefined, boolean>> {
}

export const CleanupDefaultForm: FC<ICleanupDefaultFormProps> = props => <Form<IJobFilter | undefined, boolean>
	useMutation={useCleanupMutation}
	{...props}
/>

export const useCleanupLink = (): ((query: ICleanupQueryParams) => string) => {
	const linkContext = useLinkContext();
	return query => linkContext.link(CleanupApiLink, query);
}

export const useCleanupPromise = createPromiseHook<IJobFilter | undefined, boolean>(CleanupApiLink, "post");