import {ContainerSource}  from "@/puff-smith/service/ContainerSource";
import {IJobStatusSource} from "@/puff-smith/service/job/status/interface";
import {
	IJobStatus,
	SourceInfer,
}                         from "@leight-core/api";

const items: IJobStatus[] = [
	"NEW",
	"RUNNING",
	"FAILURE",
	"SUCCESS",
	"REVIEW",
	"DONE",
];

export const JobStatusSource = () => new JobStatusSourceClass();

export class JobStatusSourceClass extends ContainerSource<IJobStatusSource> implements IJobStatusSource {
	constructor() {
		super("job.status");
	}

	async toItem(status: SourceInfer.Entity<IJobStatusSource>): Promise<SourceInfer.Item<IJobStatusSource>> {
		return status;
	}

	async $query(query: SourceInfer.Query<IJobStatusSource>): Promise<SourceInfer.Entity<IJobStatusSource>[]> {
		return items.map(status => ({
			id:    status,
			value: status,
			label: status,
		}));
	}
}
