import {QueryEndpoint} from "@leight-core/server";
import {IAtomizer, IAtomizerQuery} from "@/puff-smith/service/atomizer";
import {AtomizerService} from "@/puff-smith/service/atomizer/service";

export default QueryEndpoint<"Atomizers", IAtomizerQuery, IAtomizer>(async ({request}) => AtomizerService().query(request));
