import {IOhmService} from "@/puff-smith/service/ohm/interface";

export const OhmService = (): IOhmService => ({
	toOhm: (voltage, current) => voltage / current,
});
