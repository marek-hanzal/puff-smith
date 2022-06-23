import {ITokenSource} from "@/puff-smith/service/token/interface";
import {TokenSource} from "@/puff-smith/service/token/TokenSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ITokenSource>({
	source: TokenSource,
});
