/**
 * Generated file; DO NOT modify as it could be overridden by a generator.
 */

import {IJobSchedule} from "@/puff-smith/service/job/interface";
import {IJob} from "@leight-core/api";
import {createMutationHook, createPromise, createPromiseHook, Form, IFormProps, toLink} from "@leight-core/client";
import {FC} from "react";
import {useQueryClient} from "react-query";

export const ScheduleApiLink = "/api/job/schedule";

export type IScheduleQueryParams = undefined;

export const useScheduleMutation = createMutationHook<IJobSchedule<any>, IJob>(ScheduleApiLink, "post");

export const useScheduleQueryInvalidate = () => {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries([ScheduleApiLink]);
};

export interface IScheduleDefaultFormProps extends Partial<IFormProps<IJobSchedule<any>, IJob>> {
}

export const ScheduleDefaultForm: FC<IScheduleDefaultFormProps> = props => <Form<IJobSchedule<any>, IJob>
	useMutation={useScheduleMutation}
	{...props}
/>;

export const toScheduleLink = (queryParams?: IScheduleQueryParams) => toLink(ScheduleApiLink, queryParams);
export const useScheduleLink = () => toScheduleLink;

export const useSchedulePromise = createPromiseHook<IJobSchedule<any>, IJob>(ScheduleApiLink, "post");

export const SchedulePromise = createPromise<IJobSchedule<any>, IJob>(ScheduleApiLink, "post");
