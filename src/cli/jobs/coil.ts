import {ServiceCreate} from "@/puff-smith/service";
import {CoilService} from "@/puff-smith/service/coil/CoilService";
import {JobService} from "@/puff-smith/service/job/JobService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJobProcessor} from "@leight-core/api";

const COILS_NAME = "job.coils";
const COIL_NAME = "job.coil";

export interface ICoilsJobParams {
}

export const CoilsJob: IJobProcessor<ICoilsJobParams> = {
	name: () => COILS_NAME,
	schedule: async (params, userId) => JobService().schedule<ICoilsJobParams>(COILS_NAME, params, userId),
	scheduleAt: async (schedule, params, userId) => JobService().scheduleAt<ICoilsJobParams>(COILS_NAME, schedule, params, userId),
	register: agenda => agenda.define(COILS_NAME, {
		concurrency: 1,
		priority: 4,
	}, JobService().handle<ICoilsJobParams>(COILS_NAME, async ({jobProgress, job: {userId}, logger, progress}) => {
		logger.debug("Scheduling updating all coils.");
		await jobProgress.setTotal(await prisma.wire.count());
		for (const wire of await prisma.wire.findMany({
			orderBy: [
				{name: "asc"},
			]
		})) {
			logger.debug(`Scheduling coil update of wire [${wire.name}].`);
			await progress(async () => CoilJob.scheduleAt("in 1 minute", {wireId: wire.id}, userId));
		}
	})),
};

export interface ICoilJobParams {
	wireId: string;
}

export const CoilJob: IJobProcessor<ICoilJobParams> = {
	name: () => COIL_NAME,
	schedule: async (params, userId) => JobService().schedule<ICoilJobParams>(COIL_NAME, params, userId),
	scheduleAt: async (schedule, params, userId) => JobService().scheduleAt<ICoilJobParams>(COIL_NAME, schedule, params, userId),
	register: agenda => agenda.define(COIL_NAME, {
		concurrency: 10,
		priority: 5,
	}, JobService().handle<ICoilJobParams>(COIL_NAME, async ({jobProgress, job: {params: {wireId}, userId}, logger, progress}) => {
		const wire = await prisma.wire.findUnique({
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
			rejectOnNotFound: true,
		});
		logger.debug(`Updating coils of wire [${wire.name}].`);
		await jobProgress.setTotal(96);
		const coilService = CoilService(ServiceCreate(userId));
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
	})),
};
