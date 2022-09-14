import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {IJobStatusSource} from "@/puff-smith/service/job/status/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJobStatus, ISourceEntity, ISourceItem, ISourceQuery} from "@leight-core/api";

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
		super("job.status", prisma);
	}

	async map(status: ISourceEntity<IJobStatusSource>): Promise<ISourceItem<IJobStatusSource>> {
		return {
			value: status,
			label: status,
		};
	}

	async $query(query: ISourceQuery<IJobStatusSource>): Promise<ISourceEntity<IJobStatusSource>[]> {
		return items;
	}
}
