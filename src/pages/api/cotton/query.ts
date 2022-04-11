import {CottonService, ICotton, ICottonQuery} from "@/puff-smith/service/cotton";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Cottons", ICottonQuery, ICotton>(CottonService().handleQuery);
