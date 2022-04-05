import {IJobsSourceFilterProps, JobsSourceFilter} from "@/sdk/api/job/query";
import {StatusListSourceSelect} from "@/sdk/api/job/status-list";
import {FormItem, toOption} from "@leight-core/client";
import {FC} from "react";

export interface IJobsFilterProps extends Partial<IJobsSourceFilterProps> {
}

export const JobsFilter: FC<IJobsFilterProps> = props => {
	return <JobsSourceFilter
		toFilter={values => {
			console.log("filter", values);
			return {
				status: values.status,
			};
		}}
		formProps={{
			translation: "common.job.filter",
		}}
		{...props}
	>
		<FormItem field={"status"}>
			<StatusListSourceSelect
				toOption={toOption}
				labelPrefix={"common.job.status."}
			/>
		</FormItem>
	</JobsSourceFilter>;
};
