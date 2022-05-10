/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const MixturesUpdateApiLink = "/api/mixture/update";

export type IMixturesUpdateQueryParams = undefined;

export const useMixturesUpdateMutation = createMutationHook<void, any>(MixturesUpdateApiLink, "post");

export const useMixturesUpdateQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([MixturesUpdateApiLink]);
}

export interface IMixturesUpdateDefaultFormProps extends Partial<IFormProps<void, any>> {
}

export const MixturesUpdateDefaultForm: FC<IMixturesUpdateDefaultFormProps> = props => <Form<void, any>
	useMutation={useMixturesUpdateMutation}
	{...props}
/>

export const toMixturesUpdateLink = (queryParams?: IMixturesUpdateQueryParams) => toLink(MixturesUpdateApiLink, queryParams);
export const useMixturesUpdateLink = () => toMixturesUpdateLink;

export const useMixturesUpdatePromise = createPromiseHook<void, any>(MixturesUpdateApiLink, "post");

export const MixturesUpdatePromise = createPromise<void, any>(MixturesUpdateApiLink, "post");
