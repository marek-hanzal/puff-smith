import {ITokenSource} from "@/puff-smith/service/token/interface";
import {TokenSource} from "@/puff-smith/service/token/TokenSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"TokenCount", ITokenSource>(TokenSource);
