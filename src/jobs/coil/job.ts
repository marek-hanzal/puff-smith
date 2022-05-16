import {COIL_JOB, COILS_JOB, ICoilJobParams, ICoilsJobParams} from "@/puff-smith/cli/jobs/coil/interface";
import {JobService} from "@/puff-smith/service/job/JobService";
import {IJobProcessor} from "@leight-core/api";

const jobService = JobService();

export const CoilsJob: IJobProcessor<ICoilsJobParams> = jobService.processor(COILS_JOB, async () => {
	// JobService().handle<ICoilsJobParams>(async ({jobProgress, job: {userId}, logger, progress}) => {
	// 	logger.debug("Scheduling updating all coils.");
	// 	await jobProgress.setTotal(await prisma.wire.count());
	// 	for (const wire of await prisma.wire.findMany({
	// 		orderBy: [
	// 			{name: "asc"},
	// 		]
	// 	})) {
	// 		logger.debug(`Scheduling coil update of wire [${wire.name}].`);
	// 		await progress(async () => CoilJob.scheduleAt("in 1 minute", {wireId: wire.id}, userId));
	// 	}
	// });
});

export const CoilJob: IJobProcessor<ICoilJobParams> = jobService.processor(COIL_JOB, async () => {
	// JobService().handle<ICoilJobParams>(async ({jobProgress, job: {params: {wireId}, userId}, logger, progress}) => {
	// 	const wire = await prisma.wire.findUnique({
	// 		where: {
	// 			id: wireId,
	// 		},
	// 		include: {
	// 			WireDraw: {
	// 				include: {
	// 					draw: true,
	// 				}
	// 			},
	// 		},
	// 		rejectOnNotFound: true,
	// 	});
	// 	logger.debug(`Updating coils of wire [${wire.name}].`);
	// 	await jobProgress.setTotal(96);
	// 	const coilService = CoilService(ServiceCreate(userId));
	// 	for (let wraps = 3; wraps <= 14; wraps++) {
	// 		for (let size = 0.15; size <= 0.5; size += 0.05) {
	// 			await progress(async () => await coilService.create({
	// 				wraps,
	// 				size,
	// 				wireId: wire.id,
	// 				drawIds: wire.WireDraw.map(({draw}) => draw.id),
	// 			}));
	// 		}
	// 	}
	// });
});
