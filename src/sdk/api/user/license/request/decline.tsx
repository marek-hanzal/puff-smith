/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserLicenseRequestRequest} from "@/puff-smith/service/user/license/request/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const LicenseRequestDeclineApiLink = "/api/user/license/request/decline";

export type ILicenseRequestDeclineQueryParams = any;

export const useLicenseRequestDeclineMutation = createMutationHook<IUserLicenseRequestRequest, any>(LicenseRequestDeclineApiLink, "post");

export interface ILicenseRequestDeclineDefaultFormProps extends Partial<IFormProps<IUserLicenseRequestRequest, any>> {
}

export const LicenseRequestDeclineDefaultForm: FC<ILicenseRequestDeclineDefaultFormProps> = props => <Form<IUserLicenseRequestRequest, any>
	useMutation={useLicenseRequestDeclineMutation}
	{...props}
/>

export const toLicenseRequestDeclineLink = (queryParams?: ILicenseRequestDeclineQueryParams) => toLink(LicenseRequestDeclineApiLink, queryParams);
export const useLicenseRequestDeclineLink = () => toLicenseRequestDeclineLink;

export const useLicenseRequestDeclinePromise = createPromiseHook<IUserLicenseRequestRequest, any>(LicenseRequestDeclineApiLink, "post");

export const LicenseRequestDeclinePromise = createPromise<IUserLicenseRequestRequest, any>(LicenseRequestDeclineApiLink, "post");
