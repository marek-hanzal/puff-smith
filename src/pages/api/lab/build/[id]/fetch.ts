import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildSource} from "@/puff-smith/service/build/interface";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Build", IBuildSource>(BuildSource);
