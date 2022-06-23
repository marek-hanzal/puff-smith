import {ITokenSource} from "@/puff-smith/service/token/interface";
import {TokenSource} from "@/puff-smith/service/token/TokenSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Token", ITokenSource>({
	source: TokenSource,
});
