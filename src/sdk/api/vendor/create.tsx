/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IVendorSource} from "@/puff-smith/service/vendor/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const VendorCreateApiLink = "/api/vendor/create";

export type IVendorCreateQueryParams = any;

export const useVendorCreateMutation = createMutationHook<ISourceCreate<IVendorSource>, ISourceItem<IVendorSource>>(VendorCreateApiLink, "post");

export interface IVendorCreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IVendorSource>, ISourceItem<IVendorSource>>> {
}

export const VendorCreateDefaultForm: FC<IVendorCreateDefaultFormProps> = props => <Form<ISourceCreate<IVendorSource>, ISourceItem<IVendorSource>>
	useMutation={useVendorCreateMutation}
	translation={VendorCreateApiLink}
	{...props}
/>

export const toVendorCreateLink = (queryParams?: IVendorCreateQueryParams) => toLink(VendorCreateApiLink, queryParams);
export const useVendorCreateLink = () => toVendorCreateLink;

export const useVendorCreatePromise = createPromiseHook<ISourceCreate<IVendorSource>, ISourceItem<IVendorSource>>(VendorCreateApiLink, "post");

export const VendorCreatePromise = createPromise<ISourceCreate<IVendorSource>, ISourceItem<IVendorSource>>(VendorCreateApiLink, "post");
