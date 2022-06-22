/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const PatchApiLink = "/api/aroma/patch";

export type IPatchQueryParams = any;

export const usePatchMutation = createMutationHook<ISourcePatch<IAromaSource>, ISourceItem<IAromaSource>>(PatchApiLink, "post");

export interface IPatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<IAromaSource>, ISourceItem<IAromaSource>>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => <Form<ISourcePatch<IAromaSource>, ISourceItem<IAromaSource>>
	useMutation={usePatchMutation}
	{...props}
/>

export const toPatchLink = (queryParams?: IPatchQueryParams) => toLink(PatchApiLink, queryParams);
export const usePatchLink = () => toPatchLink;

export const usePatchPromise = createPromiseHook<ISourcePatch<IAromaSource>, ISourceItem<IAromaSource>>(PatchApiLink, "post");

export const PatchPromise = createPromise<ISourcePatch<IAromaSource>, ISourceItem<IAromaSource>>(PatchApiLink, "post");
