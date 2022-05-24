import {BaseRatioSource} from "@/puff-smith/service/base/ratio/BaseRatioSource";
import {IBaseRatioSource} from "@/puff-smith/service/base/ratio/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Ratio", IBaseRatioSource>(BaseRatioSource());
