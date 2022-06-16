import {AtomizerDrawSource} from "@/puff-smith/service/atomizer/inventory/draw/AtomizerDrawSource";
import {IAtomizerDrawSource} from "@/puff-smith/service/atomizer/inventory/draw/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Draw", IAtomizerDrawSource>(AtomizerDrawSource);
