import {IFiber} from "@/puff-smith/service/fiber/interface";

export interface IWireFiber {
	id: string;
	count: number;
	fiberId: string;
	fiber: IFiber;
}
