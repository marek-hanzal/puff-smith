import {CottonService} from "@/puff-smith/service/cotton/CottonService";
import {ICotton, ICottonQuery} from "@/puff-smith/service/cotton/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Cottons", ICottonQuery, ICotton>(CottonService().handleQuery, cache);
