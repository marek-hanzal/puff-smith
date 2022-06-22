/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IMixtureJobParams} from "@/puff-smith/jobs/mixture/interface";
import {IJob} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";

export const MixtureUpdateApiLink = "/api/mixture/aroma/update";

export type IMixtureUpdateQueryParams = any;

export const useMixtureUpdateMutation = createMutationHook<IMixtureJobParams, IJob<IMixtureJobParams>>(MixtureUpdateApiLink, "post");

export interface IMixtureUpdateDefaultFormProps extends Partial<IFormProps<IMixtureJobParams, IJob<IMixtureJobParams>>> {
}

export const MixtureUpdateDefaultForm: FC<IMixtureUpdateDefaultFormProps> = props => <Form<IMixtureJobParams, IJob<IMixtureJobParams>>
	useMutation={useMixtureUpdateMutation}
	{...props}
/>

export const toMixtureUpdateLink = (queryParams?: IMixtureUpdateQueryParams) => toLink(MixtureUpdateApiLink, queryParams);
export const useMixtureUpdateLink = () => toMixtureUpdateLink;

export const useMixtureUpdatePromise = createPromiseHook<IMixtureJobParams, IJob<IMixtureJobParams>>(MixtureUpdateApiLink, "post");

export const MixtureUpdatePromise = createPromise<IMixtureJobParams, IJob<IMixtureJobParams>>(MixtureUpdateApiLink, "post");
