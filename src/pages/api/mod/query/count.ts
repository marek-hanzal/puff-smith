import {IModSource} from "@/puff-smith/service/mod/interface";
import {ModSource} from "@/puff-smith/service/mod/ModSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"ModCount", IModSource>(ModSource);
