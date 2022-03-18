import {QueryEndpoint} from "@leight-core/server";
import {atomizerQuery, IAtomizer, IAtomizerFilter, IAtomizerOrderBy, IAtomizerQuery} from "@/puff-smith/service/atomizer";

export default QueryEndpoint<"Atomizers", IAtomizerQuery, IAtomizer, IAtomizerFilter, IAtomizerOrderBy>(async ({req: {body}}) => atomizerQuery(body));
