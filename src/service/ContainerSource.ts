import {
	Container,
	ContainerClass
}                       from "@/puff-smith/service/Container";
import {
	IPrismaTransaction,
	ISource,
	IUser,
	SourceInfer
}                       from "@leight-core/api";
import {AbstractSource} from "@leight-core/server";

export abstract class ContainerSource<TSource extends ISource<ContainerClass, any, any>> extends AbstractSource<//
	ContainerClass,
	SourceInfer.Entity<TSource>,
	SourceInfer.Item<TSource>,
	SourceInfer.Query<TSource>,
	SourceInfer.Create<TSource>,
	SourceInfer.Backup<TSource>> {
	protected constructor(name: string, prisma?: IPrismaTransaction, user?: IUser) {
		super(name, Container({prisma, user}));
	}
}
