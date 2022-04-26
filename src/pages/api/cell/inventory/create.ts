import {CellInventoryService} from "@/puff-smith/service/cell/inventory/CellInventoryService";
import {ICellInventory, ICellInventoryCreate} from "@/puff-smith/service/cell/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", Omit<ICellInventoryCreate, "userId">, ICellInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => CellInventoryService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
