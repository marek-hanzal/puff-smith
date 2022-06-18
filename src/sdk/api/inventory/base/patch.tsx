/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBaseInventorySource} from "@/puff-smith/service/base/inventory/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const PatchApiLink = "/api/inventory/base/patch";

export type IPatchQueryParams = any;

export const usePatchMutation = createMutationHook<ISourcePatch<IBaseInventorySource>, ISourceItem<IBaseInventorySource>>(PatchApiLink, "post");

export const usePatchQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([PatchApiLink]);
};

export interface IPatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<IBaseInventorySource>, ISourceItem<IBaseInventorySource>>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => <Form<ISourcePatch<IBaseInventorySource>, ISourceItem<IBaseInventorySource>>
	useMutation={usePatchMutation}
	{...props}
/>;

export const toPatchLink = (queryParams?: IPatchQueryParams) => toLink(PatchApiLink, queryParams);
export const usePatchLink = () => toPatchLink;

export const usePatchPromise = createPromiseHook<ISourcePatch<IBaseInventorySource>, ISourceItem<IBaseInventorySource>>(PatchApiLink, "post");

export const PatchPromise = createPromise<ISourcePatch<IBaseInventorySource>, ISourceItem<IBaseInventorySource>>(PatchApiLink, "post");
