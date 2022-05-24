import {CottonSource} from "@/puff-smith/service/cotton/CottonSource";
import {ICottonSource} from "@/puff-smith/service/cotton/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Cotton", ICottonSource>(CottonSource());
