import {CottonDrawSource} from "@/puff-smith/service/cotton/draw/CottonDrawSource";
import {ICottonDrawSource} from "@/puff-smith/service/cotton/draw/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Draw", ICottonDrawSource>(CottonDrawSource());
