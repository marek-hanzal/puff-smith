import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildSource} from "@/puff-smith/service/build/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"BuildCount", IBuildSource>(BuildSource());
