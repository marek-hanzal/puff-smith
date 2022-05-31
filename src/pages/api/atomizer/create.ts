import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerSource} from "@/puff-smith/service/atomizer/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IAtomizerSource>(AtomizerSource());
