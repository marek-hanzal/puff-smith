import {BootstrapLogger} from "@/puff-smith/service/logger";
import register from "@/puff-smith/service/prometheus";
import {collectDefaultMetrics} from "prom-client";

const Bootstrap = () => {
	console.log("Bootstrap started.");
	BootstrapLogger();
	try {
		collectDefaultMetrics({
			register,
		});
	} catch (e) {
		console.log("Metrics already registered.");
	}
	console.log("Bootstrap done.");
};

Bootstrap();
