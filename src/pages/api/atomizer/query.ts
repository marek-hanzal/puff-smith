import {QueryEndpoint} from "@leight-core/server";
import {atomizerQuery, IAtomizer, IAtomizerQuery} from "@/puff-smith/service/atomizer";

export default QueryEndpoint<"Atomizers", IAtomizerQuery, IAtomizer>(async ({req: {body}}) => atomizerQuery(body));
