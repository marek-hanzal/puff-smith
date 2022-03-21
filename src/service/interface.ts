import {IPrismaClientTransaction, IQuery} from "@leight-core/api";
import {toQuery} from "@leight-core/server";
import {IAtomizerQuery} from "@/puff-smith/service/atomizer";
import {IQueryFilter, IQueryOrderBy} from "@leight-core/api/lib/cjs/source/interface";
import {IImportHandlers} from "@/puff-smith/import";

export interface IRepositoryService<TCreate, TEntity, TResponse, TQuery extends IQuery<any, any>> {
	create(create: TCreate): Promise<TEntity>;

	query(query: TQuery): any;

	fetch(id: string): Promise<TEntity>;

	toMap(id: string): Promise<TResponse>;

	map(entity: TEntity): Promise<TResponse>;

	importers(): IImportHandlers;
}

export type IRepositoryServiceFactory<TCreate, TEntity, TResponse, TQuery extends IQuery<any, any>> = (prisma?: IPrismaClientTransaction) => IRepositoryService<TCreate, TEntity, TResponse, TQuery>;

export interface ISource<TEntity, TQuery extends IQuery<any, any>> {
	count(arg?: {
		where?: IQueryFilter<TQuery>;
	}): Promise<number>;

	findMany(arg?: {
		where?: IQueryFilter<TQuery>;
		orderBy?: IQueryOrderBy<TQuery>;
	}): Promise<TEntity[]>;

	findUnique(arg: { where: { id: string }, rejectOnNotFound: boolean }): Promise<TEntity | null>
}

export const AbstractRepositoryService = <TEntity, TResponse, TQuery extends IQuery<any, any>>(
	prismaClient: IPrismaClientTransaction,
	source: ISource<TEntity, TQuery>,
	mapper: (entity: TEntity) => Promise<TResponse>,
): Pick<IRepositoryService<any, TEntity, TResponse, TQuery>, "fetch" | "query" | "map" | "toMap"> => ({
	fetch: async id => (await source.findUnique({
		where: {id},
		rejectOnNotFound: true,
	})) as TEntity,
	query: async query => toQuery<(entities: Promise<TEntity[]>) => Promise<TResponse[]>, IAtomizerQuery>({
		query,
		source,
		mapper: async entities => Promise.all((await entities).map(mapper)),
	}),
	map: mapper,
	async toMap(id) {
		return mapper(await this.fetch(id))
	},
});

