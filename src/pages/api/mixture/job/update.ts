import {MIXTURES_JOB} from "@/puff-smith/cli/jobs/mixture/interface";
import {ServiceCreate} from "@/puff-smith/service";
import {JobService} from "@/puff-smith/service/job/JobService";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"UpdateJob", void, any>(async ({res, toUserId}) => {
	const $job = JobService(ServiceCreate(toUserId())).create({
		userId: toUserId(),
		name: MIXTURES_JOB,
	});
	res.end($job);
	return new Promise(resolve => {
		resolve("yep!");
	});
});
