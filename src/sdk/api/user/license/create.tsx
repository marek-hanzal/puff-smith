/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserLicenseSource} from "@/puff-smith/service/user/license/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/user/license/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IUserLicenseSource>, ISourceItem<IUserLicenseSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IUserLicenseSource>, ISourceItem<IUserLicenseSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IUserLicenseSource>, ISourceItem<IUserLicenseSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IUserLicenseSource>, ISourceItem<IUserLicenseSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IUserLicenseSource>, ISourceItem<IUserLicenseSource>>(CreateApiLink, "post");
