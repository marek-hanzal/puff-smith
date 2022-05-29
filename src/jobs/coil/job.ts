import {COIL_JOB, COIL_USER_JOB, COILS_JOB, ICoilJobParams, ICoilsJobParams, ICoilUserJobParams} from "@/puff-smith/jobs/coil/interface";
import {CoilSource} from "@/puff-smith/service/coil/CoilSource";
import {CoilInventorySource} from "@/puff-smith/service/coil/inventory/CoilInventorySource";
import {JobSource} from "@/puff-smith/service/job/JobSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IJobProcessor} from "@leight-core/api";
import AsyncLock from "async-lock";
import PQueue from "p-queue";

const jobService = JobSource();
const lock = new AsyncLock({});

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
	const coilSource = CoilSource().withUserId(userId);
	for (let wraps = 3; wraps <= 16; wraps++) {
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
	concurrency: 5,
	intervalCap: 5,
}));

export const CoilUserJob: IJobProcessor<ICoilUserJobParams> = jobService.processor(COIL_USER_JOB, async ({jobProgress, userId, logger, progress}) => {
	await lock.acquire("coil-user" + userId, async () => {
		logger.debug("User coil update.", {userId});
		if (!userId) {
			throw new Error("User not provided!");
		}

		const where = {
			wire: {
				WireInventory: {
					some: {
						userId,
					}
				}
			}
		};

		await jobProgress.setTotal(await prisma.coil.count({
			where,
		}));
		const $coils = await prisma.coil.findMany({
			where,
		});
		const coilInventorySource = CoilInventorySource().withUserId(userId);
		for (const {id} of $coils) {
			await progress(async () => coilInventorySource.create({
				coilId: id,
			}), 50);
		}
	});
}, options => new PQueue({
	...options,
	concurrency: 5,
	intervalCap: 5,
}));
