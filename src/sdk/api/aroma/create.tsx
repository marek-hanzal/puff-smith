/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {ISourceCreate, ISourceItem} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CreateApiLink = "/api/aroma/create";

export type ICreateQueryParams = any;

export const useCreateMutation = createMutationHook<ISourceCreate<IAromaSource>, ISourceItem<IAromaSource>>(CreateApiLink, "post");

export interface ICreateDefaultFormProps extends Partial<IFormProps<ISourceCreate<IAromaSource>, ISourceItem<IAromaSource>>> {
}

export const CreateDefaultForm: FC<ICreateDefaultFormProps> = props => <Form<ISourceCreate<IAromaSource>, ISourceItem<IAromaSource>>
	useMutation={useCreateMutation}
	{...props}
/>

export const toCreateLink = (queryParams?: ICreateQueryParams) => toLink(CreateApiLink, queryParams);
export const useCreateLink = () => toCreateLink;

export const useCreatePromise = createPromiseHook<ISourceCreate<IAromaSource>, ISourceItem<IAromaSource>>(CreateApiLink, "post");

export const CreatePromise = createPromise<ISourceCreate<IAromaSource>, ISourceItem<IAromaSource>>(CreateApiLink, "post");
