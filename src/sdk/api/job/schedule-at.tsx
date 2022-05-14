/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobScheduleAt} from "@/puff-smith/service/job/interface";
import {IJob} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const ScheduleAtApiLink = "/api/job/schedule-at";

export type IScheduleAtQueryParams = undefined;

export const useScheduleAtMutation = createMutationHook<IJobScheduleAt<any>, IJob>(ScheduleAtApiLink, "post");

export const useScheduleAtQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ScheduleAtApiLink]);
}

export interface IScheduleAtDefaultFormProps extends Partial<IFormProps<IJobScheduleAt<any>, IJob>> {
}

export const ScheduleAtDefaultForm: FC<IScheduleAtDefaultFormProps> = props => <Form<IJobScheduleAt<any>, IJob>
	useMutation={useScheduleAtMutation}
	{...props}
/>

export const toScheduleAtLink = (queryParams?: IScheduleAtQueryParams) => toLink(ScheduleAtApiLink, queryParams);
export const useScheduleAtLink = () => toScheduleAtLink;

export const useScheduleAtPromise = createPromiseHook<IJobScheduleAt<any>, IJob>(ScheduleAtApiLink, "post");

export const ScheduleAtPromise = createPromise<IJobScheduleAt<any>, IJob>(ScheduleAtApiLink, "post");
