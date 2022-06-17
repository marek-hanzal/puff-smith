/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICottonSource} from "@/puff-smith/service/cotton/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/cotton/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<ICottonSource>, ISourceItem<ICottonSource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
};

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ICottonSource>, ISourceItem<ICottonSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<ICottonSource>, ISourceItem<ICottonSource>>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<ICottonSource>, ISourceItem<ICottonSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<ICottonSource>, ISourceItem<ICottonSource>>(CreateApiLink, "post");
