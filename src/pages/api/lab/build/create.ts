import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildSource} from "@/puff-smith/service/build/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IBuildSource>(BuildSource);
