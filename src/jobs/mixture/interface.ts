export const MIXTURES_JOB = "job.mixtures";
export const MIXTURE_JOB = "job.mixture";
export const MIXTURE_INVENTORY_AROMA_JOB = "job.mixture.inventory.aroma";
export const MIXTURE_INVENTORY_BOOSTER_JOB = "job.mixture.inventory.booster";
export const MIXTURE_INVENTORY_BASE_JOB = "job.mixture.inventory.base";

export interface IMixturesJobParams {
}

export interface IMixtureJobParams {
	aromaId: string;
}

export interface IMixtureInventoryAromaJobParams {
	aromaId: string;
}

export interface IMixtureInventoryBoosterJobParams {
	boosterId: string;
}

export interface IMixtureInventoryBaseJobParams {
	baseId: string;
}
