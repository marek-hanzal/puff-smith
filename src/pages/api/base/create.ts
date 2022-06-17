import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {IBaseSource} from "@/puff-smith/service/base/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IBaseSource>(BaseSource);
