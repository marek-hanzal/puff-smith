import {ofParams} from "@/puff-smith/service";
import {CottonRepository} from "@/puff-smith/service/cotton/CottonRepository";
import {ICotton, ICottonQuery} from "@/puff-smith/service/cotton/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Cotton", ICottonQuery, ICotton>(async params => CottonRepository(ofParams(params)).handleQuery(params));
