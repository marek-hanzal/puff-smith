import {AtomizerService} from "@/puff-smith/service/atomizer/AtomizerService";
import {IAtomizer, IAtomizerQuery} from "@/puff-smith/service/atomizer/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Atomizer", IAtomizerQuery, IAtomizer>(AtomizerService().handleQuery);
