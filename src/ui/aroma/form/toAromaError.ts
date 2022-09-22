import {IMobileFormErrorMap} from "@leight-core/api";

export const toAromaError = (): IMobileFormErrorMap<any> => ({
	"Unique error on [aroma.name,vendorId]": {id: ["name"], error: "Unique error on [aroma.name,vendorId]"},
	"Unique error on [aroma.code]": {id: ["code"], error: "Unique error on [aroma.code]"},
});
