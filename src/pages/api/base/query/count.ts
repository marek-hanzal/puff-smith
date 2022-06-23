import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {IBaseSource} from "@/puff-smith/service/base/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"BaseCount", IBaseSource>({
	source: BaseSource,
});
