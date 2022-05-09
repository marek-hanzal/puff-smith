import {CoilService} from "@/puff-smith/service/coil/CoilService";
import {JobService} from "@/puff-smith/service/job/JobService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJobProcessor} from "@leight-core/api";

const JOB_NAME = "job.coil";

interface ICoilJobParams {
}

export const CoilJob: IJobProcessor<ICoilJobParams> = {
	name: () => JOB_NAME,
	schedule: async (params, userId) => JobService().schedule<ICoilJobParams>(JOB_NAME, params, userId),
	register: agenda => agenda.define(JOB_NAME, {
		concurrency: 1,
		priority: 5,
	}, JobService().handle<ICoilJobParams>(JOB_NAME, async ({jobProgress, logger, progress}) => {
		logger.debug("Scheduling updating all coils.");
		return await prisma.$transaction(async prisma => {
			await jobProgress.setTotal(await prisma.wire.count() * Math.ceil(await prisma.wire.count() * ((0.5 - 0.15) / 0.05) * 12));
			for (const wire of await prisma.wire.findMany({
				include: {
					WireDraw: {
						include: {
							draw: true,
						}
					},
				},
			})) {
				logger.debug(`Updating coils of wire [${wire.id}].`);
				const coilService = CoilService();
				for (let wraps = 3; wraps <= 14; wraps++) {
					for (let size = 0.15; size <= 0.5; size += 0.05) {
						await progress(async () => await coilService.create({
							wraps,
							size,
							wireId: wire.id,
							drawIds: wire.WireDraw.map(({draw}) => draw.id),
						}));
					}
				}
			}
		});
	})),
};
