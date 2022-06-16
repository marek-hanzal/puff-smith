import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {IBaseSource} from "@/puff-smith/service/base/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Base", IBaseSource>(BaseSource);
