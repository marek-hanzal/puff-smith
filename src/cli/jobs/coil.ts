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
	schedule: async (params, userId) => JobService(ServiceCreate(userId)).schedule<ICoilsJobParams>({
		name: COILS_NAME,
		params,
	}),
	scheduleAt: async (schedule, params, userId) => JobService(ServiceCreate(userId)).scheduleAt<ICoilsJobParams>({
		name: COILS_NAME,
		params,
		at: schedule,
	}),
	register: agenda => agenda.define(COILS_NAME, {
		concurrency: 1,
		priority: -10,
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
	schedule: async (params, userId) => JobService(ServiceCreate(userId)).schedule<ICoilJobParams>({
		name: COIL_NAME,
		params,
	}),
	scheduleAt: async (schedule, params, userId) => JobService(ServiceCreate(userId)).scheduleAt<ICoilJobParams>({
		name: COIL_NAME,
		params,
		at: schedule,
	}),
	register: agenda => agenda.define(COIL_NAME, {
		concurrency: 10,
		priority: -10,
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
