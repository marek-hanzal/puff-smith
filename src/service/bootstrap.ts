import {BootstrapLogger} from "@leight-core/server";
import {collectDefaultMetrics, register} from "prom-client";

const Bootstrap = (version: string = process.env.NEXT_PUBLIC_VERSION || "edge") => {
	BootstrapLogger([
		"job",
		"import",
		"service",
		"endpoint",
		"auth",
		"query",
		"migration",
	], version);
	try {
		register.setDefaultLabels({
			app: "puff-smith",
			version,
		});
		collectDefaultMetrics({
			prefix: "puff_smith_",
			register,
		});
	} catch (e) {
	}
};

Bootstrap();
