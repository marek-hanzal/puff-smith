import {ICodeService} from "@/puff-smith/service/code/interface";
import randomatic from 'randomatic';

export const CodeService = (): ICodeService => ({
	code: () => `${randomatic('AA')}-${randomatic('00AA')}-${randomatic('AAAA00')}`,
})
