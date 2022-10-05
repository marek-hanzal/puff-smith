/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
import {
	ISourceCreate,
	ISourceItem
}                      from "@leight-core/api";
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

export const useLiquidCreateMutation = createMutationHook<ISourceCreate<ILiquidSource>, ISourceItem<ILiquidSource>>(LiquidCreateApiLink, "post");

export interface ILiquidCreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ILiquidSource>, ISourceItem<ILiquidSource>>> {
}

export const LiquidCreateDefaultForm: FC<ILiquidCreateDefaultFormProps> = props => <Form<ISourceCreate<ILiquidSource>, ISourceItem<ILiquidSource>>
	useMutation={useLiquidCreateMutation}
	translation={LiquidCreateApiLink}
	{...props}
/>

export interface ILiquidCreateDefaultMobileFormProps extends Partial<IMobileFormProps<ISourceCreate<ILiquidSource>, ISourceItem<ILiquidSource>>> {
}

export const LiquidCreateDefaultMobileForm: FC<ILiquidCreateDefaultMobileFormProps> = props => <MobileForm<ISourceCreate<ILiquidSource>, ISourceItem<ILiquidSource>>
	useMutation={useLiquidCreateMutation}
	translation={LiquidCreateApiLink}
	{...props}
/>

export const toLiquidCreateLink = (queryParams?: ILiquidCreateQueryParams) => toLink(LiquidCreateApiLink, queryParams);
export const useLiquidCreateLink = () => toLiquidCreateLink;

export const useLiquidCreatePromise = createPromiseHook<ISourceCreate<ILiquidSource>, ISourceItem<ILiquidSource>>(LiquidCreateApiLink, "post");

export const LiquidCreatePromise = createPromise<ISourceCreate<ILiquidSource>, ISourceItem<ILiquidSource>>(LiquidCreateApiLink, "post");
