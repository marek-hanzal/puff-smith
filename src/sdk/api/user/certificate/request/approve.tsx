/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IUserCertificateRequestRequest} from "@/puff-smith/service/user/certificate/request/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CertificateRequestApproveApiLink = "/api/user/certificate/request/approve";

export type ICertificateRequestApproveQueryParams = any;

export const useCertificateRequestApproveMutation = createMutationHook<IUserCertificateRequestRequest, any>(CertificateRequestApproveApiLink, "post");

export interface ICertificateRequestApproveDefaultFormProps extends Partial<IFormProps<IUserCertificateRequestRequest, any>> {
}

export const CertificateRequestApproveDefaultForm: FC<ICertificateRequestApproveDefaultFormProps> = props => <Form<IUserCertificateRequestRequest, any>
	useMutation={useCertificateRequestApproveMutation}
	{...props}
/>

export const toCertificateRequestApproveLink = (queryParams?: ICertificateRequestApproveQueryParams) => toLink(CertificateRequestApproveApiLink, queryParams);
export const useCertificateRequestApproveLink = () => toCertificateRequestApproveLink;

export const useCertificateRequestApprovePromise = createPromiseHook<IUserCertificateRequestRequest, any>(CertificateRequestApproveApiLink, "post");

export const CertificateRequestApprovePromise = createPromise<IUserCertificateRequestRequest, any>(CertificateRequestApproveApiLink, "post");
