/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/inventory/atomizer/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IAtomizerInventorySource>, ISourceItem<IAtomizerInventorySource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IAtomizerInventorySource>, ISourceItem<IAtomizerInventorySource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IAtomizerInventorySource>, ISourceItem<IAtomizerInventorySource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IAtomizerInventorySource>, ISourceItem<IAtomizerInventorySource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IAtomizerInventorySource>, ISourceItem<IAtomizerInventorySource>>(CreateApiLink, "post");
