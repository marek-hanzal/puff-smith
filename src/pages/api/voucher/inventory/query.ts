import {ServiceCreate} from "@/puff-smith/service";
import {IVoucherInventory, IVoucherInventoryQuery} from "@/puff-smith/service/voucher/inventory/interface";
import {VoucherInventoryService} from "@/puff-smith/service/voucher/inventory/VoucherInventoryService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"VoucherInventory", IVoucherInventoryQuery, IVoucherInventory>(async ({request, toUserId}) => VoucherInventoryService(ServiceCreate(toUserId())).handleQuery({request}));
