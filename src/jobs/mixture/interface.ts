export const MIXTURES_JOB = "job.mixtures";
export const MIXTURE_JOB = "job.mixture";
export const MIXTURE_USER_JOB = "job.mixture-user";
export const MIXTURE_INVENTORY_AROMA_JOB = "job.mixture.inventory.aroma";
export const MIXTURE_INVENTORY_BOOSTER_JOB = "job.mixture.inventory.booster";
export const MIXTURE_INVENTORY_BASE_JOB = "job.mixture.inventory.base";

export interface IMixturesJobParams {
}

export interface IMixtureJobParams {
	aromaId: string;
}

export interface IMixtureUserJobParams {
}

export interface IMixtureInventoryAromaJobParams {
	aromaId: string;
	aromaInventoryId: string;
}

export interface IMixtureInventoryBoosterJobParams {
	boosterId: string;
	boosterInventoryId: string;
}

export interface IMixtureInventoryBaseJobParams {
	baseId: string;
	baseInventoryId: string;
}
