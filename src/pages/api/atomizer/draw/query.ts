import {AtomizerDrawSource} from "@/puff-smith/service/atomizer/draw/AtomizerDrawSource";
import {IAtomizerDrawSource} from "@/puff-smith/service/atomizer/draw/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Draw", IAtomizerDrawSource>({
	source: AtomizerDrawSource,
});
