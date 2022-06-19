/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICertificateSource} from "@/puff-smith/service/certificate/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/certificate/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<ICertificateSource>, ISourceItem<ICertificateSource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
};

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ICertificateSource>, ISourceItem<ICertificateSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<ICertificateSource>, ISourceItem<ICertificateSource>>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<ICertificateSource>, ISourceItem<ICertificateSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<ICertificateSource>, ISourceItem<ICertificateSource>>(CreateApiLink, "post");
