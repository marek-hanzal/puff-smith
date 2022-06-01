/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBuildLiquidTasteRatingSource} from "@/puff-smith/service/build/liquid/taste/rating/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const PatchApiLink = "/api/lab/build/liquid/taste/patch";

export type IPatchQueryParams = undefined;

export const usePatchMutation = createMutationHook<ISourcePatch<IBuildLiquidTasteRatingSource>, ISourceItem<IBuildLiquidTasteRatingSource>>(PatchApiLink, "post");

export const usePatchQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([PatchApiLink]);
};

export interface IPatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<IBuildLiquidTasteRatingSource>, ISourceItem<IBuildLiquidTasteRatingSource>>> {
}

export const PatchDefaultForm: FC<IPatchDefaultFormProps> = props => <Form<ISourcePatch<IBuildLiquidTasteRatingSource>, ISourceItem<IBuildLiquidTasteRatingSource>>
	useMutation={usePatchMutation}
	{...props}
/>;

export const toPatchLink = (queryParams?: IPatchQueryParams) => toLink(PatchApiLink, queryParams);
export const usePatchLink = () => toPatchLink;

export const usePatchPromise = createPromiseHook<ISourcePatch<IBuildLiquidTasteRatingSource>, ISourceItem<IBuildLiquidTasteRatingSource>>(PatchApiLink, "post");

export const PatchPromise = createPromise<ISourcePatch<IBuildLiquidTasteRatingSource>, ISourceItem<IBuildLiquidTasteRatingSource>>(PatchApiLink, "post");
