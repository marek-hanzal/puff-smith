/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITagSource} from "@/puff-smith/service/tag/interface";
import {
	ISourceCreate,
	ISourceItem
}                   from "@leight-core/api";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	Form,
	IFormProps,
	IMobileFormProps,
	MobileForm,
	toLink
}                   from "@leight-core/client";
import {FC}         from "react";

export const TagCreateApiLink = "/api/tag/create";

export type ITagCreateQueryParams = any;

export const useTagCreateMutation = createMutationHook<ISourceCreate<ITagSource>, ISourceItem<ITagSource>>(TagCreateApiLink, "post");

export interface ITagCreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<ITagSource>, ISourceItem<ITagSource>>> {
}

export const TagCreateDefaultForm: FC<ITagCreateDefaultFormProps> = props => <Form<ISourceCreate<ITagSource>, ISourceItem<ITagSource>>
	useMutation={useTagCreateMutation}
	translation={TagCreateApiLink}
	{...props}
/>

export interface ITagCreateDefaultMobileFormProps extends Partial<IMobileFormProps<ISourceCreate<ITagSource>, ISourceItem<ITagSource>>> {
}

export const TagCreateDefaultMobileForm: FC<ITagCreateDefaultMobileFormProps> = props => <MobileForm<ISourceCreate<ITagSource>, ISourceItem<ITagSource>>
	useMutation={useTagCreateMutation}
	translation={TagCreateApiLink}
	{...props}
/>

export const toTagCreateLink = (queryParams?: ITagCreateQueryParams) => toLink(TagCreateApiLink, queryParams);
export const useTagCreateLink = () => toTagCreateLink;

export const useTagCreatePromise = createPromiseHook<ISourceCreate<ITagSource>, ISourceItem<ITagSource>>(TagCreateApiLink, "post");

export const TagCreatePromise = createPromise<ISourceCreate<ITagSource>, ISourceItem<ITagSource>>(TagCreateApiLink, "post");
