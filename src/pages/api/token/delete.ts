import {ITokenSource} from "@/puff-smith/service/token/interface";
import {TokenSource} from "@/puff-smith/service/token/TokenSource";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", ITokenSource>({
	source: TokenSource,
});
