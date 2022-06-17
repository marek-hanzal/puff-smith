import {IModSource} from "@/puff-smith/service/mod/interface";
import {ModSource} from "@/puff-smith/service/mod/ModSource";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IModSource>(ModSource);
