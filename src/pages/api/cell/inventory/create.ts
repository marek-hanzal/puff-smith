import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {CellInventoryService, ICellInventory, ICellInventoryCreate} from "@/puff-smith/service/cell";
import {handlePuffiesException} from "@/puff-smith/service/transaction";
import {MutationEndpoint} from "@leight-core/server";

ServerBootstrap();

export default MutationEndpoint<"Create", Omit<ICellInventoryCreate, "userId">, ICellInventory>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => CellInventoryService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
