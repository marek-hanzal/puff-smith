import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {CottonService, ICotton, ICottonQuery} from "@/puff-smith/service/cotton";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"Cottons", ICottonQuery, ICotton>(CottonService().handleQuery);
