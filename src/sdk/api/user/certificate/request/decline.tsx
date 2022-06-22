/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserCertificateRequestRequest} from "@/puff-smith/service/user/certificate/request/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CertificateRequestDeclineApiLink = "/api/user/certificate/request/decline";

export type ICertificateRequestDeclineQueryParams = any;

export const useCertificateRequestDeclineMutation = createMutationHook<IUserCertificateRequestRequest, any>(CertificateRequestDeclineApiLink, "post");

export interface ICertificateRequestDeclineDefaultFormProps extends Partial<IFormProps<IUserCertificateRequestRequest, any>> {
}

export const CertificateRequestDeclineDefaultForm: FC<ICertificateRequestDeclineDefaultFormProps> = props => <Form<IUserCertificateRequestRequest, any>
	useMutation={useCertificateRequestDeclineMutation}
	{...props}
/>;

export const toCertificateRequestDeclineLink = (queryParams?: ICertificateRequestDeclineQueryParams) => toLink(CertificateRequestDeclineApiLink, queryParams);
export const useCertificateRequestDeclineLink = () => toCertificateRequestDeclineLink;

export const useCertificateRequestDeclinePromise = createPromiseHook<IUserCertificateRequestRequest, any>(CertificateRequestDeclineApiLink, "post");

export const CertificateRequestDeclinePromise = createPromise<IUserCertificateRequestRequest, any>(CertificateRequestDeclineApiLink, "post");
