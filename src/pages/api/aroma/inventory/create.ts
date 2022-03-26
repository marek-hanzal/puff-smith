import {MutationEndpoint} from "@leight-core/server";
import {AromaInventoryService, IAromaInventory, IAromaInventoryCreate} from "@/puff-smith/service/aroma";

export default MutationEndpoint<"Create", Omit<IAromaInventoryCreate, "userId">, IAromaInventory>(async ({res, request, toUserId}) => {
	const aromaInventoryService = AromaInventoryService();
	try {
		return await aromaInventoryService.handleCreate({
			request: {
				...request,
				userId: await toUserId(),
			}
		});
	} catch (e) {
		if ((e as Error).message?.includes("Not enough puffies")) {
			res.status(409).end('Not enough puffies');
			return;
		}
	}
});
