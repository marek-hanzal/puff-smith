import {CoilService} from "@/puff-smith/service/coil/CoilService";
import {JobService} from "@/puff-smith/service/job/JobService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJobProcessor} from "@leight-core/api";

const JOB_NAME = "job.coil";

interface ICoilJobParams {
	wireId: string | "all";
}

export const CoilJob: IJobProcessor<ICoilJobParams> = {
	name: () => JOB_NAME,
	schedule: async (params, userId) => JobService().schedule<ICoilJobParams>(JOB_NAME, params, userId),
	register: agenda => agenda.define(JOB_NAME, {
		concurrency: 1,
		priority: 5,
	}, JobService().handle<ICoilJobParams>(JOB_NAME, async ({jobProgress, jobService, job, logger, progress}) => {
		if (job.params?.wireId === "all") {
			logger.debug("Scheduling updating all coils.");
			return await prisma.$transaction(async prisma => {
				await jobProgress.setTotal(await prisma.wire.count());
				for (const wire of await prisma.wire.findMany()) {
					await progress(async () => {
						await jobService.schedule<ICoilJobParams>(JOB_NAME, {
							wireId: wire.id,
						}, job.userId);
					});
				}
			});
		}
		if (job.params?.wireId) {
			logger.debug(`Updating coils of wire [${job.params.wireId}].`);
			const wire = await prisma.wire.findUnique({
				where: {
					id: job.params.wireId!,
				},
				include: {
					WireDraw: {
						include: {
							draw: true,
						}
					}
				},
				rejectOnNotFound: true
			});
			await jobProgress.setTotal(await prisma.wire.count() * 12);
			const coilService = CoilService();
			for (let wraps = 3; wraps <= 14; wraps++) {
				for (let size = 0.15; wraps <= 0.5; size += 0.5) {
					coilService.create({
						name: "name",
						wraps,
						size,
						wireId: wire.id,
						draws: [],
					});
				}
				return;
			}
			throw new Error("Coil update job without 'wireId' specified; specify 'wireId' or 'all' for... all wires.");
		}
	})),
};
