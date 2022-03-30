import {CreateEndpoint} from "@leight-core/server";
import {ILiquid, ILiquidCreate, LiquidService} from "@/puff-smith/service/liquid";

export default CreateEndpoint<"Create", Omit<ILiquidCreate, "userId">, ILiquid>(async ({res, request, toUserId}) => {
	try {
		return await LiquidService().handleCreate({
			request: {
				...request,
				userId: await toUserId(),
			}
		})
	} catch (e) {
		if ((e as Error).message?.includes("Not enough puffies")) {
			res.status(409).end('Not enough puffies');
			return;
		}
	}
});
