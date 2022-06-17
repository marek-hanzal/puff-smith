import {ILiquid, ILiquidStandaloneCreate} from "@/puff-smith/service/liquid/interface";
import {LiquidSource} from "@/puff-smith/service/liquid/LiquidSource";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Standalone", ILiquidStandaloneCreate, ILiquid>(async ({user, request}) => {
	const liquidSource = LiquidSource().withUser(user);
	return liquidSource.mapper.map(await liquidSource.standalone(request));
});
