import {IJobsSourceFilterProps, JobsSourceFilter} from "@/sdk/api/shared/job/query";
import {FC} from "react";

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
