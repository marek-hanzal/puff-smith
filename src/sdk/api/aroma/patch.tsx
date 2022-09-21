/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {ISourceItem, ISourcePatch} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, IMobileFormProps, MobileForm, toLink} from "@leight-core/client";
import {FC} from "react";

export const AromaPatchApiLink = "/api/aroma/patch";

export type IAromaPatchQueryParams = any;

export const useAromaPatchMutation = createMutationHook<ISourcePatch<IAromaSource>, ISourceItem<IAromaSource>>(AromaPatchApiLink, "post");

export interface IAromaPatchDefaultFormProps extends Partial<IFormProps<ISourcePatch<IAromaSource>, ISourceItem<IAromaSource>>> {
}

export const AromaPatchDefaultForm: FC<IAromaPatchDefaultFormProps> = props => <Form<ISourcePatch<IAromaSource>, ISourceItem<IAromaSource>>
	useMutation={useAromaPatchMutation}
	translation={AromaPatchApiLink}
	{...props}
/>;

export interface IAromaPatchDefaultMobileFormProps extends Partial<IMobileFormProps<ISourcePatch<IAromaSource>, ISourceItem<IAromaSource>>> {
}

export const AromaPatchDefaultMobileForm: FC<IAromaPatchDefaultMobileFormProps> = props => <MobileForm<ISourcePatch<IAromaSource>, ISourceItem<IAromaSource>>
	useMutation={useAromaPatchMutation}
	translation={AromaPatchApiLink}
	{...props}
/>;

export const toAromaPatchLink = (queryParams?: IAromaPatchQueryParams) => toLink(AromaPatchApiLink, queryParams);
export const useAromaPatchLink = () => toAromaPatchLink;

export const useAromaPatchPromise = createPromiseHook<ISourcePatch<IAromaSource>, ISourceItem<IAromaSource>>(AromaPatchApiLink, "post");

export const AromaPatchPromise = createPromise<ISourcePatch<IAromaSource>, ISourceItem<IAromaSource>>(AromaPatchApiLink, "post");
