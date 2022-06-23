import {CottonSource} from "@/puff-smith/service/cotton/CottonSource";
import {ICottonSource} from "@/puff-smith/service/cotton/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"CottonCount", ICottonSource>({
	source: CottonSource,
});
