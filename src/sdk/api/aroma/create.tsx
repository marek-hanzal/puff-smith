/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, IMobileFormProps, MobileForm, toLink} from "@leight-core/client";
import {FC} from "react";

export const AromaCreateApiLink = "/api/aroma/create";

export type IAromaCreateQueryParams = any;

export const useAromaCreateMutation = createMutationHook<ISourceCreate<IAromaSource>, ISourceItem<IAromaSource>>(AromaCreateApiLink, "post");

export interface IAromaCreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IAromaSource>, ISourceItem<IAromaSource>>> {
}

export const AromaCreateDefaultForm: FC<IAromaCreateDefaultFormProps> = props => <Form<ISourceCreate<IAromaSource>, ISourceItem<IAromaSource>>
	useMutation={useAromaCreateMutation}
	translation={AromaCreateApiLink}
	{...props}
/>;

export interface IAromaCreateDefaultMobileFormProps extends Partial<IMobileFormProps<ISourceCreate<IAromaSource>, ISourceItem<IAromaSource>>> {
}

export const AromaCreateDefaultMobileForm: FC<IAromaCreateDefaultMobileFormProps> = props => <MobileForm<ISourceCreate<IAromaSource>, ISourceItem<IAromaSource>>
	useMutation={useAromaCreateMutation}
	translation={AromaCreateApiLink}
	{...props}
/>;

export const toAromaCreateLink = (queryParams?: IAromaCreateQueryParams) => toLink(AromaCreateApiLink, queryParams);
export const useAromaCreateLink = () => toAromaCreateLink;

export const useAromaCreatePromise = createPromiseHook<ISourceCreate<IAromaSource>, ISourceItem<IAromaSource>>(AromaCreateApiLink, "post");

export const AromaCreatePromise = createPromise<ISourceCreate<IAromaSource>, ISourceItem<IAromaSource>>(AromaCreateApiLink, "post");
