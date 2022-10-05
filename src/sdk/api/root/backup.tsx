/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBackupRequest} from "@/puff-smith/service/backup/interface";
import {IJob} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, IMobileFormProps, MobileForm, toLink} from "@leight-core/client";
import {FC} from "react";

export const BackupApiLink = "/api/root/backup";

export type IBackupQueryParams = any;

export const useBackupMutation = createMutationHook<IBackupRequest, IJob<IBackupRequest>>(BackupApiLink, "post");

export interface IBackupDefaultFormProps extends Partial<IFormProps<IBackupRequest, IJob<IBackupRequest>>> {
}

export const BackupDefaultForm: FC<IBackupDefaultFormProps> = props => <Form<IBackupRequest, IJob<IBackupRequest>>
	useMutation={useBackupMutation}
	translation={BackupApiLink}
	{...props}
/>

export interface IBackupDefaultMobileFormProps extends Partial<IMobileFormProps<IBackupRequest, IJob<IBackupRequest>>> {
}

export const BackupDefaultMobileForm: FC<IBackupDefaultMobileFormProps> = props => <MobileForm<IBackupRequest, IJob<IBackupRequest>>
	useMutation={useBackupMutation}
	translation={BackupApiLink}
	{...props}
/>

export const toBackupLink = (queryParams?: IBackupQueryParams) => toLink(BackupApiLink, queryParams);
export const useBackupLink = () => toBackupLink;

export const useBackupPromise = createPromiseHook<IBackupRequest, IJob<IBackupRequest>>(BackupApiLink, "post");
export const createBackupPromise = createPromise<IBackupRequest, IJob<IBackupRequest>>(BackupApiLink, "post");
