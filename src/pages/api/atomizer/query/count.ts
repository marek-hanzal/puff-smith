import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerSource} from "@/puff-smith/service/atomizer/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"AtomizerCount", IAtomizerSource>({
	source: AtomizerSource,
});
