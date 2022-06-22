/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICellInventorySource} from "@/puff-smith/service/cell/inventory/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const PatchApiLink = "/api/inventory/cell/patch";

export type IPatchQueryParams = any;

export const usePatchMutation = createMutationHook<ISourcePatch<ICellInventorySource>, ISourceItem<ICellInventorySource>>(PatchApiLink, "post");

export interface IPatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<ICellInventorySource>, ISourceItem<ICellInventorySource>>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => <Form<ISourcePatch<ICellInventorySource>, ISourceItem<ICellInventorySource>>
	useMutation={usePatchMutation}
	{...props}
/>

export const toPatchLink = (queryParams?: IPatchQueryParams) => toLink(PatchApiLink, queryParams);
export const usePatchLink = () => toPatchLink;

export const usePatchPromise = createPromiseHook<ISourcePatch<ICellInventorySource>, ISourceItem<ICellInventorySource>>(PatchApiLink, "post");

export const PatchPromise = createPromise<ISourcePatch<ICellInventorySource>, ISourceItem<ICellInventorySource>>(PatchApiLink, "post");
