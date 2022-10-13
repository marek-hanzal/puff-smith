/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {
	IRestoreJob,
	IRestoreJobParams
}           from "@/puff-smith/jobs/restore/interface";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	Form,
	IFormProps,
	IMobileFormProps,
	MobileForm,
	toLink
}           from "@leight-core/viv";
import {FC} from "react";

export const RestoreApiLink = "/api/file/restore";

export type IRestoreQueryParams = any;

export const useRestoreMutation = createMutationHook<IRestoreJobParams, IRestoreJob>(RestoreApiLink, "post");

export interface IRestoreDefaultFormProps extends Partial<IFormProps<IRestoreJobParams, IRestoreJob>> {
}

export const RestoreDefaultForm: FC<IRestoreDefaultFormProps> = props => <Form<IRestoreJobParams, IRestoreJob>
	useMutation={useRestoreMutation}
	translation={RestoreApiLink}
	{...props}
/>;

export interface IRestoreDefaultMobileFormProps extends Partial<IMobileFormProps<IRestoreJobParams, IRestoreJob>> {
}

export const RestoreDefaultMobileForm: FC<IRestoreDefaultMobileFormProps> = props => <MobileForm<IRestoreJobParams, IRestoreJob>
	useMutation={useRestoreMutation}
	translation={RestoreApiLink}
	{...props}
/>;

export const toRestoreLink  = (queryParams?: IRestoreQueryParams) => toLink(RestoreApiLink, queryParams);
export const useRestoreLink = () => toRestoreLink;

export const useRestorePromise    = createPromiseHook<IRestoreJobParams, IRestoreJob>(RestoreApiLink, "post");
export const createRestorePromise = createPromise<IRestoreJobParams, IRestoreJob>(RestoreApiLink, "post");
