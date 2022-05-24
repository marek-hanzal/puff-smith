import {BoosterVendorSource} from "@/puff-smith/service/booster/vendor/BoosterVendorSource";
import {IBoosterVendorSource} from "@/puff-smith/service/booster/vendor/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Vendor", IBoosterVendorSource>(BoosterVendorSource());
