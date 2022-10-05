import {IOhmService} from "@/puff-smith/service/ohm/interface";

export const OhmService = (): IOhmService => ({
	toOhm:  (voltage, current) => voltage / current,
	toAmps: (voltage, ohm) => voltage / ohm,
	toWatt: (voltage, amps) => voltage * amps,
});
