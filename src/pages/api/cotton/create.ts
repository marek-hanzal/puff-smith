import {CottonSource} from "@/puff-smith/service/cotton/CottonSource";
import {ICottonSource} from "@/puff-smith/service/cotton/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ICottonSource>(CottonSource);
