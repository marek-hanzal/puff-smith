import {AtomizerService, IAtomizer, IAtomizerQuery} from "@/puff-smith/service/atomizer";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Atomizers", IAtomizerQuery, IAtomizer>(AtomizerService().handleQuery);
