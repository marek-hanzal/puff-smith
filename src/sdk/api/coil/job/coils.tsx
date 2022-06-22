/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {ICoilsJobParams} from "@/puff-smith/jobs/coil/interface";
import {IJob} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const CoilsJobApiLink = "/api/coil/job/coils";

export type ICoilsJobQueryParams = any;

export const useCoilsJobMutation = createMutationHook<ICoilsJobParams, IJob<ICoilsJobParams>>(CoilsJobApiLink, "post");

export interface ICoilsJobDefaultFormProps extends Partial<IFormProps<ICoilsJobParams, IJob<ICoilsJobParams>>> {
}

export const CoilsJobDefaultForm: FC<ICoilsJobDefaultFormProps> = props => <Form<ICoilsJobParams, IJob<ICoilsJobParams>>
	useMutation={useCoilsJobMutation}
	{...props}
/>

export const toCoilsJobLink = (queryParams?: ICoilsJobQueryParams) => toLink(CoilsJobApiLink, queryParams);
export const useCoilsJobLink = () => toCoilsJobLink;

export const useCoilsJobPromise = createPromiseHook<ICoilsJobParams, IJob<ICoilsJobParams>>(CoilsJobApiLink, "post");

export const CoilsJobPromise = createPromise<ICoilsJobParams, IJob<ICoilsJobParams>>(CoilsJobApiLink, "post");
