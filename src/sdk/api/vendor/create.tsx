/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVendorSource} from "@/puff-smith/service/vendor/interface";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	Form,
	IFormProps,
	IMobileFormProps,
	MobileForm,
	SourceInfer,
	toLink
}                      from "@leight-core/viv";
import {FC}            from "react";

export const VendorCreateApiLink = "/api/vendor/create";

export type IVendorCreateQueryParams = any;

export const useVendorCreateMutation = createMutationHook<SourceInfer.Create<IVendorSource>, SourceInfer.Item<IVendorSource>>(VendorCreateApiLink, "post");

export interface IVendorCreateDefaultFormProps extends Partial<IFormProps<SourceInfer.Create<IVendorSource>, SourceInfer.Item<IVendorSource>>> {
}

export const VendorCreateDefaultForm: FC<IVendorCreateDefaultFormProps> = props => <Form<SourceInfer.Create<IVendorSource>, SourceInfer.Item<IVendorSource>>
	useMutation={useVendorCreateMutation}
	translation={VendorCreateApiLink}
	{...props}
/>;

export interface IVendorCreateDefaultMobileFormProps extends Partial<IMobileFormProps<SourceInfer.Create<IVendorSource>, SourceInfer.Item<IVendorSource>>> {
}

export const VendorCreateDefaultMobileForm: FC<IVendorCreateDefaultMobileFormProps> = props => <MobileForm<SourceInfer.Create<IVendorSource>, SourceInfer.Item<IVendorSource>>
	useMutation={useVendorCreateMutation}
	translation={VendorCreateApiLink}
	{...props}
/>;

export const toVendorCreateLink  = (queryParams?: IVendorCreateQueryParams) => toLink(VendorCreateApiLink, queryParams);
export const useVendorCreateLink = () => toVendorCreateLink;

export const useVendorCreatePromise = createPromiseHook<SourceInfer.Create<IVendorSource>, SourceInfer.Item<IVendorSource>>(VendorCreateApiLink, "post");

export const VendorCreatePromise = createPromise<SourceInfer.Create<IVendorSource>, SourceInfer.Item<IVendorSource>>(VendorCreateApiLink, "post");
