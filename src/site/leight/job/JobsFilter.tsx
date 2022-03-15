import {FC} from "react";
import {IJobsSourceFilterProps, JobsSourceFilter} from "@/sdk/api/leight/shared/job/query";

export interface IJobsFilterProps extends Partial<IJobsSourceFilterProps> {
}

export const JobsFilter: FC<IJobsFilterProps> = props => {
	return <JobsSourceFilter
		toFilter={values => ({
			status: 'FAILURE',
		})}
		{...props}
	/>;
}
