/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IBuildLiquidTasteRatingGenerate} from "@/puff-smith/service/build/liquid/taste/rating/interface";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const BuildTasteGenerateApiLink = "/api/lab/build/liquid/taste/generate";

export type IBuildTasteGenerateQueryParams = any;

export const useBuildTasteGenerateMutation = createMutationHook<IBuildLiquidTasteRatingGenerate, any>(BuildTasteGenerateApiLink, "post");

export const useBuildTasteGenerateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([BuildTasteGenerateApiLink]);
}

export interface IBuildTasteGenerateDefaultFormProps extends Partial<IFormProps<IBuildLiquidTasteRatingGenerate, any>> {
}

export const BuildTasteGenerateDefaultForm: FC<IBuildTasteGenerateDefaultFormProps> = props => <Form<IBuildLiquidTasteRatingGenerate, any>
	useMutation={useBuildTasteGenerateMutation}
	{...props}
/>

export const toBuildTasteGenerateLink = (queryParams?: IBuildTasteGenerateQueryParams) => toLink(BuildTasteGenerateApiLink, queryParams);
export const useBuildTasteGenerateLink = () => toBuildTasteGenerateLink;

export const useBuildTasteGeneratePromise = createPromiseHook<IBuildLiquidTasteRatingGenerate, any>(BuildTasteGenerateApiLink, "post");

export const BuildTasteGeneratePromise = createPromise<IBuildLiquidTasteRatingGenerate, any>(BuildTasteGenerateApiLink, "post");
