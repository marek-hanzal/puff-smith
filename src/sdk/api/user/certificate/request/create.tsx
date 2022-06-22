/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserCertificateRequestSource} from "@/puff-smith/service/user/certificate/request/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/user/certificate/request/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IUserCertificateRequestSource>, ISourceItem<IUserCertificateRequestSource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
};

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IUserCertificateRequestSource>, ISourceItem<IUserCertificateRequestSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IUserCertificateRequestSource>, ISourceItem<IUserCertificateRequestSource>>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IUserCertificateRequestSource>, ISourceItem<IUserCertificateRequestSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IUserCertificateRequestSource>, ISourceItem<IUserCertificateRequestSource>>(CreateApiLink, "post");
