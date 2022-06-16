import {IModCellSource} from "@/puff-smith/service/mod/cell/interface";
import {ModCellSource} from "@/puff-smith/service/mod/cell/ModCellSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"ModCell", IModCellSource>(ModCellSource);
