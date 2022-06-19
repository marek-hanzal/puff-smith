/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILicenseSource} from "@/puff-smith/service/license/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const CreateApiLink = "/api/license/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<ILicenseSource>, ISourceItem<ILicenseSource>>(CreateApiLink, "post");

export const useCreateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([CreateApiLink]);
};

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ILicenseSource>, ISourceItem<ILicenseSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<ILicenseSource>, ISourceItem<ILicenseSource>>
	useMutation={useCreateMutation}
	{...props}
/>;

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<ILicenseSource>, ISourceItem<ILicenseSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<ILicenseSource>, ISourceItem<ILicenseSource>>(CreateApiLink, "post");
