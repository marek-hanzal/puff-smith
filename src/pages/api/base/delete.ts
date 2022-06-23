import {BaseSource} from "@/puff-smith/service/base/BaseSource";
import {IBaseSource} from "@/puff-smith/service/base/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IBaseSource>({
	source: BaseSource,
});
