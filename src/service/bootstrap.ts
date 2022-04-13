import {BootstrapLogger} from "@/puff-smith/service/logger";
import register from "@/puff-smith/service/prometheus";
import {collectDefaultMetrics} from "prom-client";

export const Bootstrap = () => {
	BootstrapLogger();
	console.log("Register!?", register);
	collectDefaultMetrics({
		register,
	});
};

Bootstrap();
