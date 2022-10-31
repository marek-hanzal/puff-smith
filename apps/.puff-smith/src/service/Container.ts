import {IAromaSource}       from "@/puff-smith/service/aroma/interface";
import {IBaseSource}        from "@/puff-smith/service/base/interface";
import {IBoosterSource}     from "@/puff-smith/service/booster/interface";
import {ICodeService}       from "@/puff-smith/service/code/interface";
import {IFileSource}        from "@/puff-smith/service/file/interface";
import {IJobSource}         from "@/puff-smith/service/job/interface";
import {IKeywordSource}     from "@/puff-smith/service/keyword/interface";
import {ILiquidSource}      from "@/puff-smith/service/liquid/interface";
import {IMixtureSource}     from "@/puff-smith/service/mixture/interface";
import {IRecipeSource}      from "@/puff-smith/service/recipe/interface";
import CoolPrisma           from "@/puff-smith/service/side-effect/prisma";
import {ITagSource}         from "@/puff-smith/service/tag/interface";
import {ITokenSource}       from "@/puff-smith/service/token/interface";
import {ITranslationSource} from "@/puff-smith/service/translation/interface";
import {IUserSource}        from "@/puff-smith/service/user/interface";
import {IUserTokenSource}   from "@/puff-smith/service/user/token/interface";
import {IVendorSource}      from "@/puff-smith/service/vendor/interface";
import {
    IContainerCallback,
    IPrismaTransaction,
    IServiceContainer,
    IUser,
    RestoreServiceClass,
    User
}                           from "@leight-core/viv";

export interface IContainerDeps {
	prisma?: IPrismaTransaction;
	user?: IUser;
}

export const Container      = ({prisma = CoolPrisma, user = User()}: IContainerDeps = {}) => new ContainerClass(prisma, user);
export const asyncContainer = async (deps?: IContainerDeps) => Container(deps);

export class ContainerClass implements IServiceContainer<IFileSource> {
	prisma: IPrismaTransaction;
	user: IUser;

	constructor(prisma: IPrismaTransaction, user: IUser) {
		this.prisma = prisma;
		this.user   = user;
	}

	withPrisma(prisma: IPrismaTransaction): this {
		this.prisma = prisma;
		return this;
	}

	withUser(user: IUser): this {
		this.user = user;
		return this;
	}

	async useAromaSource<T>(callback: IContainerCallback<IAromaSource, T>) {
		return callback((await import ("@/puff-smith/service/aroma/AromaSource")).AromaSource().withContainer(this));
	}

	async useBaseSource<T>(callback: IContainerCallback<IBaseSource, T>) {
		return callback((await import ("@/puff-smith/service/base/BaseSource")).BaseSource().withContainer(this));
	}

	async useBoosterSource<T>(callback: IContainerCallback<IBoosterSource, T>) {
		return callback((await import ("@/puff-smith/service/booster/BoosterSource")).BoosterSource().withContainer(this));
	}

	async useCodeService<T>(callback: IContainerCallback<ICodeService, T>) {
		return callback((await import("@/puff-smith/service/code/CodeService")).CodeService());
	}

	async useLiquidSource<T>(callback: IContainerCallback<ILiquidSource, T>) {
		return callback((await import ("@/puff-smith/service/liquid/LiquidSource")).LiquidSource().withContainer(this));
	}

	async useMixtureSource<T>(callback: IContainerCallback<IMixtureSource, T>) {
		return callback((await import ("@/puff-smith/service/mixture/MixtureSource")).MixtureSource().withContainer(this));
	}

	async useFileSource<T>(callback: IContainerCallback<IFileSource, T>) {
		return callback((await import("@/puff-smith/service/file/FileSource")).FileSource().withContainer(this));
	}

	async useJobSource<T>(callback: IContainerCallback<IJobSource, T>) {
		return callback((await import("@/puff-smith/service/job/JobSource")).JobSource().withContainer(this));
	}

	async useKeywordSource<T>(callback: IContainerCallback<IKeywordSource, T>) {
		return callback((await import ("@/puff-smith/service/keyword/KeywordSource")).KeywordSource().withContainer(this));
	}

	async useRecipeSource<T>(callback: IContainerCallback<IRecipeSource, T>) {
		return callback((await import ("@/puff-smith/service/recipe/RecipeSource")).RecipeSource().withContainer(this));
	}

	async useTagSource<T>(callback: IContainerCallback<ITagSource, T>) {
		return callback((await import("@/puff-smith/service/tag/TagSource")).TagSource().withContainer(this));
	}

	async useTokenSource<T>(callback: IContainerCallback<ITokenSource, T>) {
		return callback((await import("@/puff-smith/service/token/TokenSource")).TokenSource().withContainer(this));
	}

	async useTranslationSource<T>(callback: IContainerCallback<ITranslationSource, T>) {
		return callback((await import ("@/puff-smith/service/translation/TranslationSource")).TranslationSource().withContainer(this));
	}

	async useUserSource<T>(callback: IContainerCallback<IUserSource, T>) {
		return callback((await import("@/puff-smith/service/user/UserSource")).UserSource().withContainer(this));
	}

	async useUserTokenSource<T>(callback: IContainerCallback<IUserTokenSource, T>) {
		return callback((await import ("@/puff-smith/service/user/token/UserTokenSource")).UserTokenSource().withContainer(this));
	}

	async useVendorSource<T>(callback: IContainerCallback<IVendorSource, T>) {
		return callback((await import("@/puff-smith/service/vendor/VendorSource")).VendorSource().withContainer(this));
	}

	async useRestoreService<T>(callback: IContainerCallback<RestoreServiceClass, T>) {
		return callback((await import("@leight-core/viv")).RestoreService());
	}
}
