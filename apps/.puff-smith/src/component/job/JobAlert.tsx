import {IJobQuery}      from "@/puff-smith/service/job/interface";
import {useJobQuery}    from "@/sdk/api/job/query";
import {
    QueryInfer,
    toHumanNumber
}                       from "@leight-core/viv";
import {Alert}          from "antd";
import {
    ComponentProps,
    FC
}                       from "react";
import {useTranslation} from "react-i18next";

export interface IJobAlertProps extends Partial<ComponentProps<typeof Alert>> {
	translation: string;
	filter?: QueryInfer.Filter<IJobQuery>;
}

export const JobAlert: FC<IJobAlertProps> = ({translation, filter, ...props}) => {
	const {t}       = useTranslation();
	const jobQuery  = useJobQuery({
		size:    1,
		page:    0,
		filter:  {
			...filter,
			status: {
				in: [
					"NEW",
					"RUNNING"
				],
			},
		},
		orderBy: [
					 {created: "desc"}
				 ] as any,
	}, undefined, {
		keepPreviousData: true,
		refetchInterval:  2500,
	});
	const isRunning = jobQuery.isSuccess && jobQuery.data.length > 0;
	const job       = isRunning ? jobQuery.data[0] : null;

	return job ? <Alert
		type={"success"}
		message={t(`${translation}.job.${job.status}.alert.message`, {job: {...job, progress: toHumanNumber(job.progress)}})}
		description={t(`${translation}.job.${job.status}.alert.description`, "", {job: {...job, progress: toHumanNumber(job.progress)}})}
		{...props}
	/> : null;
};
