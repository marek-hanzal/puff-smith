import {IBaseSource} from "@/puff-smith/service/base/interface";
import {IBoosterSource} from "@/puff-smith/service/booster/interface";
import {ICodeService} from "@/puff-smith/service/code/interface";
import {IJobSource} from "@/puff-smith/service/job/interface";
import {IKeywordSource} from "@/puff-smith/service/keyword/interface";
import {ITagSource} from "@/puff-smith/service/tag/interface";
import {ITokenSource} from "@/puff-smith/service/token/interface";
import {IUserSource} from "@/puff-smith/service/user/interface";
import {IUserTokenSource} from "@/puff-smith/service/user/token/interface";
import {IVendorSource} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";
import {AbstractSource} from "@leight-core/server";

export abstract class ContainerSource<TSource extends ISource<any, any, any>> extends AbstractSource<TSource> {
	async useCodeService<T>(callback: (codeService: ICodeService) => Promise<T>) {
		return callback((await import("@/puff-smith/service/code/CodeService")).CodeService());
	}

	async useTagSource<T>(callback: (tagSource: ITagSource) => Promise<T>) {
		return callback((await import("@/puff-smith/service/tag/TagSource")).TagSource().ofSource(this));
	}

	async useJobSource<T>(callback: (jobSource: IJobSource) => Promise<T>) {
		return callback((await import("@/puff-smith/service/job/JobSource")).JobSource().ofSource(this));
	}

	async useVendorSource<T>(callback: (vendorSource: IVendorSource) => Promise<T>) {
		return callback((await import("@/puff-smith/service/vendor/VendorSource")).VendorSource().ofSource(this));
	}

	async useUserSource<T>(callback: (userSource: IUserSource) => Promise<T>) {
		return callback((await import("@/puff-smith/service/user/UserSource")).UserSource().ofSource(this));
	}

	async useTokenSource<T>(callback: (tokenSource: ITokenSource) => Promise<T>) {
		return callback((await import("@/puff-smith/service/token/TokenSource")).TokenSource().ofSource(this));
	}

	async useUserTokenSource<T>(callback: (userTokenSource: IUserTokenSource) => Promise<T>) {
		return callback((await import ("@/puff-smith/service/user/token/UserTokenSource")).UserTokenSource().ofSource(this));
	}

	async useKeywordSource<T>(callback: (keywordSource: IKeywordSource) => Promise<T>) {
		return callback((await import ("@/puff-smith/service/keyword/KeywordSource")).KeywordSource().ofSource(this));
	}

	async useBoosterSource<T>(callback: (boosterSource: IBoosterSource) => Promise<T>) {
		return callback((await import ("@/puff-smith/service/booster/BoosterSource")).BoosterSource().ofSource(this));
	}

	async useBaseSource<T>(callback: (baseSource: IBaseSource) => Promise<T>) {
		return callback((await import ("@/puff-smith/service/base/BaseSource")).BaseSource().ofSource(this));
	}
}
