/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserLicenseRequestRequest} from "@/puff-smith/service/user/license/request/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const LicenseRequestApproveApiLink = "/api/user/license/request/approve";

export type ILicenseRequestApproveQueryParams = any;

export const useLicenseRequestApproveMutation = createMutationHook<IUserLicenseRequestRequest, any>(LicenseRequestApproveApiLink, "post");

export interface ILicenseRequestApproveDefaultFormProps extends Partial<IFormProps<IUserLicenseRequestRequest, any>> {
}

export const LicenseRequestApproveDefaultForm: FC<ILicenseRequestApproveDefaultFormProps> = props => <Form<IUserLicenseRequestRequest, any>
	useMutation={useLicenseRequestApproveMutation}
	{...props}
/>

export const toLicenseRequestApproveLink = (queryParams?: ILicenseRequestApproveQueryParams) => toLink(LicenseRequestApproveApiLink, queryParams);
export const useLicenseRequestApproveLink = () => toLicenseRequestApproveLink;

export const useLicenseRequestApprovePromise = createPromiseHook<IUserLicenseRequestRequest, any>(LicenseRequestApproveApiLink, "post");

export const LicenseRequestApprovePromise = createPromise<IUserLicenseRequestRequest, any>(LicenseRequestApproveApiLink, "post");
