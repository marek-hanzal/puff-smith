import {CellVendorSource} from "@/puff-smith/service/cell/vendor/CellVendorSource";
import {ICellVendorSource} from "@/puff-smith/service/cell/vendor/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", ICellVendorSource>(CellVendorSource);
