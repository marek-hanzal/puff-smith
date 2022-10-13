/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobQuery} from "@/puff-smith/service/job/interface";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	Form,
	IFormProps,
	IMobileFormProps,
	MobileForm,
	QueryInfer,
	toLink
}                  from "@leight-core/viv";
import {FC}        from "react";

export const CleanupApiLink = "/api/job/cleanup";

export type ICleanupQueryParams = any;

export const useCleanupMutation = createMutationHook<QueryInfer.Filter<IJobQuery> | undefined, void>(CleanupApiLink, "post");

export interface ICleanupDefaultFormProps extends Partial<IFormProps<QueryInfer.Filter<IJobQuery> | undefined, void>> {
}

export const CleanupDefaultForm: FC<ICleanupDefaultFormProps> = props => <Form<QueryInfer.Filter<IJobQuery> | undefined, void>
	useMutation={useCleanupMutation}
	translation={CleanupApiLink}
	{...props}
/>;

export interface ICleanupDefaultMobileFormProps extends Partial<IMobileFormProps<QueryInfer.Filter<IJobQuery> | undefined, void>> {
}

export const CleanupDefaultMobileForm: FC<ICleanupDefaultMobileFormProps> = props => <MobileForm<QueryInfer.Filter<IJobQuery> | undefined, void>
	useMutation={useCleanupMutation}
	translation={CleanupApiLink}
	{...props}
/>;

export const toCleanupLink  = (queryParams?: ICleanupQueryParams) => toLink(CleanupApiLink, queryParams);
export const useCleanupLink = () => toCleanupLink;

export const useCleanupPromise    = createPromiseHook<QueryInfer.Filter<IJobQuery> | undefined, void>(CleanupApiLink, "post");
export const createCleanupPromise = createPromise<QueryInfer.Filter<IJobQuery> | undefined, void>(CleanupApiLink, "post");
