import {MixtureNicotineSource} from "@/puff-smith/service/mixture/inventory/nicotine/MixtureNicotineSource";
import {IMixtureNicotineSource} from "@/puff-smith/service/mixture/nicotine/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Nicotine", IMixtureNicotineSource>(MixtureNicotineSource());
