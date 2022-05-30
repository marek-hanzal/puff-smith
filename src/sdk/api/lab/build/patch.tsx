/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBuildSource} from "@/puff-smith/service/build/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const PatchApiLink = "/api/lab/build/patch";

export type IPatchQueryParams = undefined;

export const usePatchMutation = createMutationHook<ISourcePatch<IBuildSource>, ISourceItem<IBuildSource>>(PatchApiLink, "post");

export const usePatchQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([PatchApiLink]);
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<IBuildSource>, ISourceItem<IBuildSource>>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => <Form<ISourcePatch<IBuildSource>, ISourceItem<IBuildSource>>
	useMutation={usePatchMutation}
	{...props}
/>

export const toPatchLink = (queryParams?: IPatchQueryParams) => toLink(PatchApiLink, queryParams);
export const usePatchLink = () => toPatchLink;

export const usePatchPromise = createPromiseHook<ISourcePatch<IBuildSource>, ISourceItem<IBuildSource>>(PatchApiLink, "post");

export const PatchPromise = createPromise<ISourcePatch<IBuildSource>, ISourceItem<IBuildSource>>(PatchApiLink, "post");
