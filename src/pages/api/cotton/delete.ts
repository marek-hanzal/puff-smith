import {CottonSource} from "@/puff-smith/service/cotton/CottonSource";
import {ICottonSource} from "@/puff-smith/service/cotton/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", ICottonSource>(CottonSource);
