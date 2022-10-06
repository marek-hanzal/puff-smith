/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {SourceInfer}  from "@leight-core/api";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	Form,
	IFormProps,
	IMobileFormProps,
	MobileForm,
	toLink
}                     from "@leight-core/client";
import {FC}           from "react";

export const AromaCreateApiLink = "/api/aroma/create";

export type IAromaCreateQueryParams = any;

export const useAromaCreateMutation = createMutationHook<SourceInfer.Create<IAromaSource>, SourceInfer.Item<IAromaSource>>(AromaCreateApiLink, "post");

export interface IAromaCreateDefaultFormProps extends Partial<IFormProps<SourceInfer.Create<IAromaSource>, SourceInfer.Item<IAromaSource>>> {
}

export const AromaCreateDefaultForm: FC<IAromaCreateDefaultFormProps> = props => <Form<SourceInfer.Create<IAromaSource>, SourceInfer.Item<IAromaSource>>
	useMutation={useAromaCreateMutation}
	translation={AromaCreateApiLink}
	{...props}
/>;

export interface IAromaCreateDefaultMobileFormProps extends Partial<IMobileFormProps<SourceInfer.Create<IAromaSource>, SourceInfer.Item<IAromaSource>>> {
}

export const AromaCreateDefaultMobileForm: FC<IAromaCreateDefaultMobileFormProps> = props => <MobileForm<SourceInfer.Create<IAromaSource>, SourceInfer.Item<IAromaSource>>
	useMutation={useAromaCreateMutation}
	translation={AromaCreateApiLink}
	{...props}
/>;

export const toAromaCreateLink = (queryParams?: IAromaCreateQueryParams) => toLink(AromaCreateApiLink, queryParams);
export const useAromaCreateLink = () => toAromaCreateLink;

export const useAromaCreatePromise = createPromiseHook<SourceInfer.Create<IAromaSource>, SourceInfer.Item<IAromaSource>>(AromaCreateApiLink, "post");

export const AromaCreatePromise = createPromise<SourceInfer.Create<IAromaSource>, SourceInfer.Item<IAromaSource>>(AromaCreateApiLink, "post");
