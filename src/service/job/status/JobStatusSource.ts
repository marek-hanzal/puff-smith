import {IJobStatusSource} from "@/puff-smith/service/job/status/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJobStatus} from "@leight-core/api";
import {Source} from "@leight-core/server";

export const JobStatusSource = (): IJobStatusSource => {
	const items: IJobStatus[] = [
		"NEW",
		"RUNNING",
		"FAILURE",
		"SUCCESS",
		"REVIEW",
		"DONE",
	];

	return Source<IJobStatusSource>({
		name: "job.status",
		prisma,
		map: async status => status ? ({
			value: status,
			label: status,
		}) : undefined,
		acl: {
			lock: true,
		},
		source: {
			query: async () => items,
		},
	});
};
