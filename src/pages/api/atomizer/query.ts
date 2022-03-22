import {QueryEndpoint} from "@leight-core/server";
import {AtomizerService, IAtomizer, IAtomizerQuery} from "@/puff-smith/service/atomizer";

export default QueryEndpoint<"Atomizers", IAtomizerQuery, IAtomizer>(async ({request}) => AtomizerService().query(request));
