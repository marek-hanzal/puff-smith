/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, IMobileFormProps, MobileForm, toLink} from "@leight-core/client";
import {FC} from "react";

export const LiquidPatchApiLink = "/api/liquid/patch";

export type ILiquidPatchQueryParams = any;

export const useLiquidPatchMutation = createMutationHook<ISourcePatch<ILiquidSource>, ISourceItem<ILiquidSource>>(LiquidPatchApiLink, "post");

export interface ILiquidPatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<ILiquidSource>, ISourceItem<ILiquidSource>>> {
}

export const LiquidPatchDefaultForm: FC<ILiquidPatchDefaultFormProps> = props => <Form<ISourcePatch<ILiquidSource>, ISourceItem<ILiquidSource>>
	useMutation={useLiquidPatchMutation}
	translation={LiquidPatchApiLink}
	{...props}
/>

export interface ILiquidPatchDefaultMobileFormProps extends Partial<IMobileFormProps<ISourcePatch<ILiquidSource>, ISourceItem<ILiquidSource>>> {
}

export const LiquidPatchDefaultMobileForm: FC<ILiquidPatchDefaultMobileFormProps> = props => <MobileForm<ISourcePatch<ILiquidSource>, ISourceItem<ILiquidSource>>
	useMutation={useLiquidPatchMutation}
	translation={LiquidPatchApiLink}
	{...props}
/>

export const toLiquidPatchLink = (queryParams?: ILiquidPatchQueryParams) => toLink(LiquidPatchApiLink, queryParams);
export const useLiquidPatchLink = () => toLiquidPatchLink;

export const useLiquidPatchPromise = createPromiseHook<ISourcePatch<ILiquidSource>, ISourceItem<ILiquidSource>>(LiquidPatchApiLink, "post");

export const LiquidPatchPromise = createPromise<ISourcePatch<ILiquidSource>, ISourceItem<ILiquidSource>>(LiquidPatchApiLink, "post");
