import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerSource} from "@/puff-smith/service/atomizer/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IAtomizerSource>({
	source: AtomizerSource,
});
