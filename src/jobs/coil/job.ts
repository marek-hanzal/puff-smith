import {COIL_JOB, COILS_JOB, ICoilJobParams, ICoilsJobParams} from "@/puff-smith/jobs/coil/interface";
import {CoilSource} from "@/puff-smith/service/coil/CoilSource";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {IJobProcessor} from "@leight-core/api";
import PQueue from "p-queue";

const jobService = JobSource();

export const CoilsJob: IJobProcessor<ICoilsJobParams> = jobService.processor(COILS_JOB, async ({jobProgress, job: {userId}, logger, progress}) => {
	logger.debug("Scheduling updating all coils.");
	await jobProgress.setTotal(await prisma.wire.count());
	for (const wire of await prisma.wire.findMany({
		orderBy: [
			{name: "asc"},
		]
	})) {
		logger.debug(`Scheduling coil update of wire [${wire.name}].`);
		await progress(async () => CoilJob.async({wireId: wire.id}, userId));
	}
}, options => new PQueue({
	...options,
	concurrency: 1,
	intervalCap: 1,
}));

export const CoilJob: IJobProcessor<ICoilJobParams> = jobService.processor(COIL_JOB, async ({jobProgress, job: {params: {wireId}, userId}, logger, progress}) => {
	const wire = await prisma.wire.findUniqueOrThrow({
		where: {
			id: wireId,
		},
		include: {
			WireDraw: {
				include: {
					draw: true,
				}
			},
		},
	});
	logger.debug(`Updating coils of wire [${wire.name}].`);
	await jobProgress.setTotal(96);
	for (let wraps = 3; wraps <= 16; wraps++) {
		const coilSource = CoilSource().withUser(await UserSource().asUser(userId));
		for (let size = 0.15; size <= 0.5; size += 0.05) {
			await progress(async () => await coilSource.create({
				wraps,
				size,
				wireId: wire.id,
				drawIds: wire.WireDraw.map(({draw}) => draw.id),
			}));
		}
	}
}, options => new PQueue({
	...options,
	concurrency: 1,
	intervalCap: 1,
}));
