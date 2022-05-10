import {IJobSourceFilterProps, JobSourceFilter} from "@/sdk/api/job/query";
import {StatusListSourceSelect} from "@/sdk/api/job/status-list";
import {FormItem, toOption} from "@leight-core/client";
import {FC} from "react";

export interface IJobFilterProps extends Partial<IJobSourceFilterProps> {
}

export const JobFilter: FC<IJobFilterProps> = props => {
	return <JobSourceFilter
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
	</JobSourceFilter>;
};
