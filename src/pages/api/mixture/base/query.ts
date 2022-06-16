import {IMixtureBaseSource} from "@/puff-smith/service/mixture/base/interface";
import {MixtureBaseSource} from "@/puff-smith/service/mixture/base/MixtureBaseSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Base", IMixtureBaseSource>(MixtureBaseSource);
