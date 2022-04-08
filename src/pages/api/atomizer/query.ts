import {AtomizerService, IAtomizer, IAtomizerQuery} from "@/puff-smith/service/atomizer";
import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"Atomizers", IAtomizerQuery, IAtomizer>(AtomizerService().handleQuery);
