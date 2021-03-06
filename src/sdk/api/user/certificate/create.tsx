/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserCertificateSource} from "@/puff-smith/service/user/certificate/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/user/certificate/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IUserCertificateSource>, ISourceItem<IUserCertificateSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IUserCertificateSource>, ISourceItem<IUserCertificateSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IUserCertificateSource>, ISourceItem<IUserCertificateSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IUserCertificateSource>, ISourceItem<IUserCertificateSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IUserCertificateSource>, ISourceItem<IUserCertificateSource>>(CreateApiLink, "post");
