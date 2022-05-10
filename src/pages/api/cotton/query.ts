import {CottonService} from "@/puff-smith/service/cotton/CottonService";
import {ICotton, ICottonQuery} from "@/puff-smith/service/cotton/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Cotton", ICottonQuery, ICotton>(CottonService().handleQuery);
