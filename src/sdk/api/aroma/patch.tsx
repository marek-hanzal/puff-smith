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

export const AromaPatchApiLink = "/api/aroma/patch";

export type IAromaPatchQueryParams = any;

export const useAromaPatchMutation = createMutationHook<SourceInfer.Patch<IAromaSource>, SourceInfer.Item<IAromaSource>>(AromaPatchApiLink, "post");

export interface IAromaPatchDefaultFormProps extends Partial<IFormProps<SourceInfer.Patch<IAromaSource>, SourceInfer.Item<IAromaSource>>> {
}

export const AromaPatchDefaultForm: FC<IAromaPatchDefaultFormProps> = props => <Form<SourceInfer.Patch<IAromaSource>, SourceInfer.Item<IAromaSource>>
	useMutation={useAromaPatchMutation}
	translation={AromaPatchApiLink}
	{...props}
/>;

export interface IAromaPatchDefaultMobileFormProps extends Partial<IMobileFormProps<SourceInfer.Patch<IAromaSource>, SourceInfer.Item<IAromaSource>>> {
}

export const AromaPatchDefaultMobileForm: FC<IAromaPatchDefaultMobileFormProps> = props => <MobileForm<SourceInfer.Patch<IAromaSource>, SourceInfer.Item<IAromaSource>>
	useMutation={useAromaPatchMutation}
	translation={AromaPatchApiLink}
	{...props}
/>;

export const toAromaPatchLink = (queryParams?: IAromaPatchQueryParams) => toLink(AromaPatchApiLink, queryParams);
export const useAromaPatchLink = () => toAromaPatchLink;

export const useAromaPatchPromise = createPromiseHook<SourceInfer.Patch<IAromaSource>, SourceInfer.Item<IAromaSource>>(AromaPatchApiLink, "post");

export const AromaPatchPromise = createPromise<SourceInfer.Patch<IAromaSource>, SourceInfer.Item<IAromaSource>>(AromaPatchApiLink, "post");
