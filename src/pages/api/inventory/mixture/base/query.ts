import {IMixtureBaseSource} from "@/puff-smith/service/mixture/inventory/base/interface";
import {MixtureBaseSource} from "@/puff-smith/service/mixture/inventory/base/MixtureBaseSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Base", IMixtureBaseSource>({
	source: MixtureBaseSource,
});
