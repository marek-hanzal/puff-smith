/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IWishlistSource} from "@/puff-smith/service/wishlist/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/wishlist/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IWishlistSource>, ISourceItem<IWishlistSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IWishlistSource>, ISourceItem<IWishlistSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IWishlistSource>, ISourceItem<IWishlistSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IWishlistSource>, ISourceItem<IWishlistSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IWishlistSource>, ISourceItem<IWishlistSource>>(CreateApiLink, "post");
