/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserLicenseRequestSource} from "@/puff-smith/service/user/license/request/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/user/license/request/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IUserLicenseRequestSource>, ISourceItem<IUserLicenseRequestSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IUserLicenseRequestSource>, ISourceItem<IUserLicenseRequestSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IUserLicenseRequestSource>, ISourceItem<IUserLicenseRequestSource>>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IUserLicenseRequestSource>, ISourceItem<IUserLicenseRequestSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IUserLicenseRequestSource>, ISourceItem<IUserLicenseRequestSource>>(CreateApiLink, "post");
