/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICommentSource} from "@/puff-smith/service/comment/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const PatchApiLink = "/api/comment/patch";

export type IPatchQueryParams = any;

export const usePatchMutation = createMutationHook<ISourcePatch<ICommentSource>, ISourceItem<ICommentSource>>(PatchApiLink, "post");

export const usePatchQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([PatchApiLink]);
}

export interface IPatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<ICommentSource>, ISourceItem<ICommentSource>>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => <Form<ISourcePatch<ICommentSource>, ISourceItem<ICommentSource>>
	useMutation={usePatchMutation}
	{...props}
/>

export const toPatchLink = (queryParams?: IPatchQueryParams) => toLink(PatchApiLink, queryParams);
export const usePatchLink = () => toPatchLink;

export const usePatchPromise = createPromiseHook<ISourcePatch<ICommentSource>, ISourceItem<ICommentSource>>(PatchApiLink, "post");

export const PatchPromise = createPromise<ISourcePatch<ICommentSource>, ISourceItem<ICommentSource>>(PatchApiLink, "post");
