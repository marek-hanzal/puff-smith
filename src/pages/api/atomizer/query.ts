import {AtomizerService} from "@/puff-smith/service/atomizer/AtomizerService";
import {IAtomizer, IAtomizerQuery} from "@/puff-smith/service/atomizer/interface";
import cache from "@/puff-smith/service/side-effect/cache";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Atomizers", IAtomizerQuery, IAtomizer>(AtomizerService().handleQuery, cache);
