import {Container, ContainerClass} from "@/puff-smith/service/Container";
import {IPrismaTransaction, ISource, IUser} from "@leight-core/api";
import {AbstractSource} from "@leight-core/server";

export abstract class ContainerSource<TSource extends ISource<any, any, any>> extends AbstractSource<TSource> {
	container: ContainerClass;

	protected constructor(name: string, prisma: IPrismaTransaction, user?: IUser) {
		super(name, prisma, user);
		this.container = Container();
	}

	withContainer(container: ContainerClass) {
		this.container = container;
		return this;
	}
}
