/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ITagSource}  from "@/puff-smith/service/tag/interface";
import {SourceInfer} from "@leight-core/api";
import {
	createMutationHook,
	createPromise,
	createPromiseHook,
	Form,
	IFormProps,
	IMobileFormProps,
	MobileForm,
	toLink
}                    from "@leight-core/client";
import {FC}          from "react";

export const TagCreateApiLink = "/api/tag/create";

export type ITagCreateQueryParams = any;

export const useTagCreateMutation = createMutationHook<SourceInfer.Create<ITagSource>, SourceInfer.Item<ITagSource>>(TagCreateApiLink, "post");

export interface ITagCreateDefaultFormProps extends Partial<IFormProps<SourceInfer.Create<ITagSource>, SourceInfer.Item<ITagSource>>> {
}

export const TagCreateDefaultForm: FC<ITagCreateDefaultFormProps> = props => <Form<SourceInfer.Create<ITagSource>, SourceInfer.Item<ITagSource>>
	useMutation={useTagCreateMutation}
	translation={TagCreateApiLink}
	{...props}
/>;

export interface ITagCreateDefaultMobileFormProps extends Partial<IMobileFormProps<SourceInfer.Create<ITagSource>, SourceInfer.Item<ITagSource>>> {
}

export const TagCreateDefaultMobileForm: FC<ITagCreateDefaultMobileFormProps> = props => <MobileForm<SourceInfer.Create<ITagSource>, SourceInfer.Item<ITagSource>>
	useMutation={useTagCreateMutation}
	translation={TagCreateApiLink}
	{...props}
/>;

export const toTagCreateLink = (queryParams?: ITagCreateQueryParams) => toLink(TagCreateApiLink, queryParams);
export const useTagCreateLink = () => toTagCreateLink;

export const useTagCreatePromise = createPromiseHook<SourceInfer.Create<ITagSource>, SourceInfer.Item<ITagSource>>(TagCreateApiLink, "post");

export const TagCreatePromise = createPromise<SourceInfer.Create<ITagSource>, SourceInfer.Item<ITagSource>>(TagCreateApiLink, "post");
