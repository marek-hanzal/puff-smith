/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
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

export const LiquidPatchApiLink = "/api/liquid/patch";

export type ILiquidPatchQueryParams = any;

export const useLiquidPatchMutation = createMutationHook<SourceInfer.Patch<ILiquidSource>, SourceInfer.Item<ILiquidSource>>(LiquidPatchApiLink, "post");

export interface ILiquidPatchDefaultFormProps extends Partial<IFormProps<SourceInfer.Patch<ILiquidSource>, SourceInfer.Item<ILiquidSource>>> {
}

export const LiquidPatchDefaultForm: FC<ILiquidPatchDefaultFormProps> = props => <Form<SourceInfer.Patch<ILiquidSource>, SourceInfer.Item<ILiquidSource>>
	useMutation={useLiquidPatchMutation}
	translation={LiquidPatchApiLink}
	{...props}
/>;

export interface ILiquidPatchDefaultMobileFormProps extends Partial<IMobileFormProps<SourceInfer.Patch<ILiquidSource>, SourceInfer.Item<ILiquidSource>>> {
}

export const LiquidPatchDefaultMobileForm: FC<ILiquidPatchDefaultMobileFormProps> = props => <MobileForm<SourceInfer.Patch<ILiquidSource>, SourceInfer.Item<ILiquidSource>>
	useMutation={useLiquidPatchMutation}
	translation={LiquidPatchApiLink}
	{...props}
/>;

export const toLiquidPatchLink  = (queryParams?: ILiquidPatchQueryParams) => toLink(LiquidPatchApiLink, queryParams);
export const useLiquidPatchLink = () => toLiquidPatchLink;

export const useLiquidPatchPromise = createPromiseHook<SourceInfer.Patch<ILiquidSource>, SourceInfer.Item<ILiquidSource>>(LiquidPatchApiLink, "post");

export const LiquidPatchPromise = createPromise<SourceInfer.Patch<ILiquidSource>, SourceInfer.Item<ILiquidSource>>(LiquidPatchApiLink, "post");
