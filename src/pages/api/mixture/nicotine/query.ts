import {IMixtureNicotineSource} from "@/puff-smith/service/mixture/nicotine/interface";
import {MixtureNicotineSource} from "@/puff-smith/service/mixture/nicotine/MixtureNicotineSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Nicotine", IMixtureNicotineSource>(MixtureNicotineSource);
