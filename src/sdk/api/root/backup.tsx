/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJob} from "@leight-core/api";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	Form,
	IFormProps,
	IMobileFormProps,
	MobileForm,
	toLink
}             from "@leight-core/client";
import {FC}   from "react";

export const BackupApiLink = "/api/root/backup";

export type IBackupQueryParams = any;

export const useBackupMutation = createMutationHook<void, IJob<void>>(BackupApiLink, "post");

export interface IBackupDefaultFormProps extends Partial<IFormProps<void, IJob<void>>> {
}

export const BackupDefaultForm: FC<IBackupDefaultFormProps> = props => <Form<void, IJob<void>>
	useMutation={useBackupMutation}
	translation={BackupApiLink}
	{...props}
/>

export interface IBackupDefaultMobileFormProps extends Partial<IMobileFormProps<void, IJob<void>>> {
}

export const BackupDefaultMobileForm: FC<IBackupDefaultMobileFormProps> = props => <MobileForm<void, IJob<void>>
	useMutation={useBackupMutation}
	translation={BackupApiLink}
	{...props}
/>

export const toBackupLink = (queryParams?: IBackupQueryParams) => toLink(BackupApiLink, queryParams);
export const useBackupLink = () => toBackupLink;

export const useBackupPromise = createPromiseHook<void, IJob<void>>(BackupApiLink, "post");
export const createBackupPromise = createPromise<void, IJob<void>>(BackupApiLink, "post");
