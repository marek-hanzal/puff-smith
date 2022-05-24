import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerSource} from "@/puff-smith/service/atomizer/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Atomizer", IAtomizerSource>(AtomizerSource());
