import {IMobileFormErrorMap} from "@leight-core/api";

export const toTagError = (): IMobileFormErrorMap<any> => ({
	"Unique error on [tag.tag,group]": {id: ["tag"], error: "Unique error on [tag.tag,group]"},
});
