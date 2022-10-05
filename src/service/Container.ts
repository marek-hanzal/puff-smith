import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {IBaseSource} from "@/puff-smith/service/base/interface";
import {IBoosterSource} from "@/puff-smith/service/booster/interface";
import {ICodeService} from "@/puff-smith/service/code/interface";
import {IFileSource} from "@/puff-smith/service/file/interface";
import {IJobSource} from "@/puff-smith/service/job/interface";
import {IKeywordSource} from "@/puff-smith/service/keyword/interface";
import {ILiquidSource} from "@/puff-smith/service/liquid/interface";
import {IMixtureSource} from "@/puff-smith/service/mixture/interface";
import {IRecipeSource} from "@/puff-smith/service/recipe/interface";
import {ITagSource} from "@/puff-smith/service/tag/interface";
import {ITokenSource} from "@/puff-smith/service/token/interface";
import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {IUserSource} from "@/puff-smith/service/user/interface";
import {IUserTokenSource} from "@/puff-smith/service/user/token/interface";
import {IVendorSource} from "@/puff-smith/service/vendor/interface";
import {ISource} from "@leight-core/api";

export const Container = () => new ContainerClass();

export class ContainerClass {
	async useCodeService<T>(callback: (codeService: ICodeService) => Promise<T>) {
		return callback((await import("@/puff-smith/service/code/CodeService")).CodeService());
	}

	async useFileSource<T>(callback: (fileSource: IFileSource) => Promise<T>, source?: ISource<any, any, any>) {
		return callback((await import("@/puff-smith/service/file/FileSource")).FileSource().ofSource(source).withContainer(this));
	}

	async useTagSource<T>(callback: (tagSource: ITagSource) => Promise<T>, source?: ISource<any, any, any>) {
		return callback((await import("@/puff-smith/service/tag/TagSource")).TagSource().ofSource(source).withContainer(this));
	}

	async useJobSource<T>(callback: (jobSource: IJobSource) => Promise<T>, source?: ISource<any, any, any>) {
		return callback((await import("@/puff-smith/service/job/JobSource")).JobSource().ofSource(source).withContainer(this));
	}

	async useVendorSource<T>(callback: (vendorSource: IVendorSource) => Promise<T>, source?: ISource<any, any, any>) {
		return callback((await import("@/puff-smith/service/vendor/VendorSource")).VendorSource().ofSource(source).withContainer(this));
	}

	async useUserSource<T>(callback: (userSource: IUserSource) => Promise<T>, source?: ISource<any, any, any>) {
		return callback((await import("@/puff-smith/service/user/UserSource")).UserSource().ofSource(source).withContainer(this));
	}

	async useTokenSource<T>(callback: (tokenSource: ITokenSource) => Promise<T>, source?: ISource<any, any, any>) {
		return callback((await import("@/puff-smith/service/token/TokenSource")).TokenSource().ofSource(source).withContainer(this));
	}

	async useUserTokenSource<T>(callback: (userTokenSource: IUserTokenSource) => Promise<T>, source?: ISource<any, any, any>) {
		return callback((await import ("@/puff-smith/service/user/token/UserTokenSource")).UserTokenSource().ofSource(source).withContainer(this));
	}

	async useKeywordSource<T>(callback: (keywordSource: IKeywordSource) => Promise<T>, source?: ISource<any, any, any>) {
		return callback((await import ("@/puff-smith/service/keyword/KeywordSource")).KeywordSource().ofSource(source).withContainer(this));
	}

	async useBoosterSource<T>(callback: (boosterSource: IBoosterSource) => Promise<T>, source?: ISource<any, any, any>) {
		return callback((await import ("@/puff-smith/service/booster/BoosterSource")).BoosterSource().ofSource(source).withContainer(this));
	}

	async useBaseSource<T>(callback: (baseSource: IBaseSource) => Promise<T>, source?: ISource<any, any, any>) {
		return callback((await import ("@/puff-smith/service/base/BaseSource")).BaseSource().ofSource(source).withContainer(this));
	}

	async useRecipeSource<T>(callback: (recipeSource: IRecipeSource) => Promise<T>, source?: ISource<any, any, any>) {
		return callback((await import ("@/puff-smith/service/recipe/RecipeSource")).RecipeSource().ofSource(source).withContainer(this));
	}

	async useTranslationSource<T>(callback: (translationSource: ITranslationSource) => Promise<T>, source?: ISource<any, any, any>) {
		return callback((await import ("@/puff-smith/service/translation/TranslationSource")).TranslationSource().ofSource(source).withContainer(this));
	}

	async useMixtureSource<T>(callback: (mixtureSource: IMixtureSource) => Promise<T>, source?: ISource<any, any, any>) {
		return callback((await import ("@/puff-smith/service/mixture/MixtureSource")).MixtureSource().ofSource(source).withContainer(this));
	}

	async useAromaSource<T>(callback: (aromaSource: IAromaSource) => Promise<T>, source?: ISource<any, any, any>) {
		return callback((await import ("@/puff-smith/service/aroma/AromaSource")).AromaSource().ofSource(source).withContainer(this));
	}

	async useLiquidSource<T>(callback: (liquidSource: ILiquidSource) => Promise<T>, source?: ISource<any, any, any>) {
		return callback((await import ("@/puff-smith/service/liquid/LiquidSource")).LiquidSource().ofSource(source).withContainer(this));
	}
}
