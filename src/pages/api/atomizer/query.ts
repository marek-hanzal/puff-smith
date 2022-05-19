import {ofParams} from "@/puff-smith/service";
import {AtomizerRepository} from "@/puff-smith/service/atomizer/AtomizerRepository";
import {IAtomizer, IAtomizerQuery} from "@/puff-smith/service/atomizer/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Atomizer", IAtomizerQuery, IAtomizer>(async params => AtomizerRepository(ofParams(params)).handleQuery(params));
