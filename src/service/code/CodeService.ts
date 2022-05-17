import {ICodeService} from "@/puff-smith/service/code/interface";
import randomatic from "randomatic";

export const CodeService = (): ICodeService => ({
	code: () => `${randomatic("AAAA")}-${randomatic("000AAA")}-${randomatic("AAAAAA00")}`,
});
