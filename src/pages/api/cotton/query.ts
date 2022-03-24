import {QueryEndpoint} from "@leight-core/server";
import {CottonService, ICotton, ICottonQuery} from "@/puff-smith/service/cotton";

export default QueryEndpoint<"Cottons", ICottonQuery, ICotton>(CottonService().handleQuery);
