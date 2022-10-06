/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
import {SourceInfer}   from "@leight-core/api";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	Form,
	IFormProps,
	IMobileFormProps,
	MobileForm,
	toLink
}                      from "@leight-core/client";
import {FC}            from "react";

export const LiquidCreateApiLink = "/api/liquid/create";

export type ILiquidCreateQueryParams = any;

export const useLiquidCreateMutation = createMutationHook<SourceInfer.Create<ILiquidSource>, SourceInfer.Item<ILiquidSource>>(LiquidCreateApiLink, "post");

export interface ILiquidCreateDefaultFormProps extends Partial<IFormProps<SourceInfer.Create<ILiquidSource>, SourceInfer.Item<ILiquidSource>>> {
}

export const LiquidCreateDefaultForm: FC<ILiquidCreateDefaultFormProps> = props => <Form<SourceInfer.Create<ILiquidSource>, SourceInfer.Item<ILiquidSource>>
	useMutation={useLiquidCreateMutation}
	translation={LiquidCreateApiLink}
	{...props}
/>;

export interface ILiquidCreateDefaultMobileFormProps extends Partial<IMobileFormProps<SourceInfer.Create<ILiquidSource>, SourceInfer.Item<ILiquidSource>>> {
}

export const LiquidCreateDefaultMobileForm: FC<ILiquidCreateDefaultMobileFormProps> = props => <MobileForm<SourceInfer.Create<ILiquidSource>, SourceInfer.Item<ILiquidSource>>
	useMutation={useLiquidCreateMutation}
	translation={LiquidCreateApiLink}
	{...props}
/>;

export const toLiquidCreateLink = (queryParams?: ILiquidCreateQueryParams) => toLink(LiquidCreateApiLink, queryParams);
export const useLiquidCreateLink = () => toLiquidCreateLink;

export const useLiquidCreatePromise = createPromiseHook<SourceInfer.Create<ILiquidSource>, SourceInfer.Item<ILiquidSource>>(LiquidCreateApiLink, "post");

export const LiquidCreatePromise = createPromise<SourceInfer.Create<ILiquidSource>, SourceInfer.Item<ILiquidSource>>(LiquidCreateApiLink, "post");
