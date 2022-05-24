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
		map: async item => ({
			value: item,
			label: item,
		}),
		source: {
			query: async () => items,
		},
	});
};
