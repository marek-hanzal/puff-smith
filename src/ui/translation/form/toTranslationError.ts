import {IMobileFormErrorMap} from "@leight-core/api";

export const toTranslationError = (): IMobileFormErrorMap<any> => ({
	"Unique error on [translation.hash]": {id: ["key"], error: "Unique error on [translation.hash]"},
});
