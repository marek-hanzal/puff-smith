import {IMobileFormErrorMap} from "@leight-core/viv";

export const toVendorError = (): IMobileFormErrorMap<any> => ({
	"Unique error on [vendor.name]": {id: ["name"], error: "Unique error on [vendor.name]"},
});
