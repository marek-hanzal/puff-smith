/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICottonInventorySource} from "@/puff-smith/service/cotton/inventory/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const PatchApiLink = "/api/inventory/cotton/patch";

export type IPatchQueryParams = any;

export const usePatchMutation = createMutationHook<ISourcePatch<ICottonInventorySource>, ISourceItem<ICottonInventorySource>>(PatchApiLink, "post");

export const usePatchQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([PatchApiLink]);
};

export interface IPatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<ICottonInventorySource>, ISourceItem<ICottonInventorySource>>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => <Form<ISourcePatch<ICottonInventorySource>, ISourceItem<ICottonInventorySource>>
	useMutation={usePatchMutation}
	{...props}
/>;

export const toPatchLink = (queryParams?: IPatchQueryParams) => toLink(PatchApiLink, queryParams);
export const usePatchLink = () => toPatchLink;

export const usePatchPromise = createPromiseHook<ISourcePatch<ICottonInventorySource>, ISourceItem<ICottonInventorySource>>(PatchApiLink, "post");

export const PatchPromise = createPromise<ISourcePatch<ICottonInventorySource>, ISourceItem<ICottonInventorySource>>(PatchApiLink, "post");
