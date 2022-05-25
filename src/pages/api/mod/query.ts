import {IModSource} from "@/puff-smith/service/mod/interface";
import {ModSource} from "@/puff-smith/service/mod/ModSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Mod", IModSource>(ModSource());
