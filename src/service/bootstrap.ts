import {BootstrapLogger} from "@leight-core/server";
import {collectDefaultMetrics, register} from "prom-client";

const Bootstrap = () => {
	console.log("Bootstrap started.");
	BootstrapLogger([
		"job",
		"import",
		"service",
		"endpoint",
		"auth",
		"query",
	]);
	try {
		register.setDefaultLabels({
			app: "puff-smith",
			version: process.env.NEXT_PUBLIC_VERSION,
		});
		collectDefaultMetrics({
			prefix: "puff_smith_",
			register,
		});
	} catch (e) {
		console.log("Metrics already registered.");
	}
	console.log("Bootstrap done.");
};

Bootstrap();
