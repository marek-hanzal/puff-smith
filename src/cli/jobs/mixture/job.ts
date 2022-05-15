import {IMixtureJobParams, IMixturesJobParams, IMixtureUserJobParams, MIXTURE_JOB, MIXTURE_USER_JOB, MIXTURES_JOB} from "@/puff-smith/cli/jobs/mixture/interface";
import {ServiceCreate} from "@/puff-smith/service";
import {JobService} from "@/puff-smith/service/job/JobService";
import {IJobProcessor} from "@leight-core/api";

export const MixturesJob: IJobProcessor<IMixturesJobParams> = {
	schedule: async (params, userId) => JobService(ServiceCreate(userId)).schedule<IMixturesJobParams>({
		name: MIXTURES_JOB,
		params,
	}),
	scheduleAt: async (schedule, params, userId) => JobService(ServiceCreate(userId)).scheduleAt<IMixturesJobParams>({
		name: MIXTURES_JOB,
		params,
		at: schedule,
	}),
	handle: async () => {
		// JobService().handle<IMixturesJobParams>(async ({jobProgress, job: {userId}, logger, progress}) => {
		// 	logger.debug("Scheduling updating all mixtures.");
		// 	await jobProgress.setTotal(await prisma.aroma.count());
		// 	for (const aroma of await prisma.aroma.findMany()) {
		// 		if (aroma.volume && aroma.content < aroma.volume) {
		// 			await progress(async () => MixtureJob.scheduleAt("in 10 seconds", {
		// 				aromaId: aroma.id,
		// 			}, userId));
		// 			continue;
		// 		}
		// 		await jobProgress.onSkip();
		// 	}
		// }),
	}
};

export const MixtureJob: IJobProcessor<IMixtureJobParams> = {
	schedule: async (params, userId) => JobService(ServiceCreate(userId)).schedule<IMixtureJobParams>({
		name: MIXTURE_JOB,
		params,
	}),
	scheduleAt: async (schedule, params, userId) => JobService(ServiceCreate(userId)).scheduleAt<IMixtureJobParams>({
		name: MIXTURE_JOB,
		params,
		at: schedule,
	}),
	handle: async () => {
		// JobService().handle<IMixtureJobParams>(async ({jobProgress, job: {params: {aromaId}}, logger, progress}) => {
		// 	logger.debug(`Updating mixture of aroma [${aromaId}].`);
		// 	const aroma = await prisma.aroma.findUnique({
		// 		where: {
		// 			id: aromaId,
		// 		},
		// 		rejectOnNotFound: true
		// 	});
		// 	const maxNicotine = ((await prisma.booster.aggregate({
		// 		_max: {
		// 			nicotine: true,
		// 		}
		// 		/**
		// 		 * It's not possible to make liquid with same nicotine strength as is
		// 		 * in the booster, to safe some compute time by lowering max. by some epsilon
		// 		 * */
		// 	}))._max.nicotine || 0) - 2;
		// 	await jobProgress.setTotal((maxNicotine + 1) * await prisma.booster.count() * await prisma.base.count());
		// 	const mixtureService = MixtureService();
		//
		// 	const createMixture = async (info: IMixtureInfo) => {
		// 		const volume = aroma.volume || aroma.content;
		// 		!info.result.error && await mixtureService.create({
		// 			aromaId: aroma.id,
		// 			baseId: info.base?.baseId,
		// 			baseMl: info.base?.volume || 0,
		// 			boosterId: info.booster?.boosterId,
		// 			boosterCount: info?.booster?.count || 0,
		// 			volume,
		// 			available: info.available,
		// 			content: info.result.volume,
		// 			diff: info.result.volume - volume,
		// 			vg: info.result.ratio.vg,
		// 			pg: info.result.ratio.pg,
		// 			vgToMl: info.result.ml.vg,
		// 			pgToMl: info.result.ml.pg,
		// 			nicotine: info.result.nicotine,
		// 			error: info.result.error,
		// 			draws: info.result.draws,
		// 		});
		// 	};
		//
		// 	/**
		// 	 * Run rest through boosters with nicotine requirement.
		// 	 *
		// 	 * This loops will generate a LOT unique index violations seemingly like an error, but
		// 	 * the "problem" is:
		// 	 *
		// 	 * Unique hash is "aromaId"-"boosterId"-"baseId"-"nicotine".
		// 	 *
		// 	 * Everything is OK until there is a request for nicotine in neighbour strengths like 5 and 6 which could
		// 	 * resolve in the same amount of booster (because there is rounding to use whole booster instead of parts of it) thus
		// 	 * generating same amount of nicotine (last piece of hash) thus for the same combination unique key violation. That's OK, because
		// 	 * this mixture is already generated and valid.
		// 	 */
		// 	const $errors: { [index: string]: boolean } = {};
		//
		// 	const aromaHash = `${aroma.vg}-${aroma.pg}-${aroma.volume}-${aroma.content}`;
		// 	for (const booster of await prisma.booster.findMany()) {
		// 		const boosterHash = `${booster.vg}-${booster.pg}-${booster.volume}-${booster.nicotine}`;
		// 		for (const base of await prisma.base.findMany()) {
		// 			const baseHash = `${base.vg}-${base.pg}`;
		// 			for (let nicotine = 0; nicotine <= maxNicotine; nicotine++) {
		// 				const nicotineHash = `${nicotine}`;
		// 				const hash = `${aromaHash}-${boosterHash}-${baseHash}-${nicotineHash}`;
		// 				if ($errors[hash]) {
		// 					await jobProgress.onSkip();
		// 					continue;
		// 				}
		// 				const info = await toMixtureInfo({
		// 					nicotine,
		// 					aroma,
		// 					booster,
		// 					base,
		// 				});
		// 				if (info.result.error) {
		// 					$errors[hash] = true;
		// 					await jobProgress.onSkip();
		// 					continue;
		// 				}
		// 				await progress(async () => createMixture(info), 200);
		// 			}
		// 		}
		// 	}
		// }),
	}
};

export const MixtureUserJob: IJobProcessor<IMixtureUserJobParams> = {
	schedule: async (params, userId) => JobService(ServiceCreate(userId)).schedule<IMixtureUserJobParams>({
		name: MIXTURE_USER_JOB,
		params,
	}),
	scheduleAt: async (schedule, params, userId) => JobService(ServiceCreate(userId)).scheduleAt<IMixtureUserJobParams>({
		name: MIXTURE_USER_JOB,
		params,
		at: schedule,
	}),
	handle: async () => {
		// JobService().handle<IMixtureUserJobParams>(async ({jobProgress, job: {params: {userId}}, logger, progress}) => {
		// 	logger.debug("User mixture update.", {userId});
		//
		// 	if (!userId) {
		// 		throw new Error("User not provided!");
		// 	}
		//
		// 	const where = {
		// 		aroma: {
		// 			AromaInventory: {
		// 				some: {
		// 					userId,
		// 				},
		// 			},
		// 		},
		// 		AND: [
		// 			{
		// 				OR: [
		// 					{
		// 						booster: {
		// 							BoosterInventory: {
		// 								some: {
		// 									userId,
		// 								},
		// 							},
		// 						},
		// 					},
		// 					{
		// 						boosterId: null,
		// 					}
		// 				]
		// 			},
		// 			{
		// 				OR: [
		// 					{
		// 						base: {
		// 							BaseInventory: {
		// 								some: {
		// 									userId,
		// 								},
		// 							},
		// 						},
		// 					},
		// 					{
		// 						baseId: null,
		// 					}
		// 				]
		// 			}
		// 		],
		// 	};
		//
		// 	await jobProgress.setTotal(await prisma.mixture.count({
		// 		where,
		// 	}));
		//
		// 	const mixtureInventoryService = MixtureInventoryService(ServiceCreate(userId));
		//
		// 	const $mixtures = (await prisma.mixture.findMany({
		// 		include: {
		// 			aroma: true,
		// 			booster: true,
		// 			base: true,
		// 		},
		// 		where,
		// 	}));
		// 	for (const {aromaId, aroma, boosterId, booster, baseId, base, id} of $mixtures) {
		// 		logger.debug(`Connecting mixture [id ${id}] [aroma ${aroma.name}] [booster ${booster?.name || "-"}] [base ${base?.name || "-"}]`);
		// 		await progress(async () => mixtureInventoryService.create({
		// 			aromaId,
		// 			vendorId: aroma.vendorId,
		// 			boosterId,
		// 			baseId,
		// 			mixtureId: id,
		// 		}), 250);
		// 	}
		// }),
	}
};
