import {ContainerSource}  from "@/puff-smith/service/ContainerSource";
import prisma             from "@/puff-smith/service/side-effect/prisma";
import {IUserTokenSource} from "@/puff-smith/service/user/token/interface";
import {
	ISourceCreate,
	ISourceEntity,
	ISourceItem,
	IWithIdentity,
	UndefinableOptional
}                         from "@leight-core/api";

export const UserTokenSource = () => new UserTokenSourceClass();

export class UserTokenSourceClass extends ContainerSource<IUserTokenSource> implements IUserTokenSource {
	constructor() {
		super("user.token", prisma);
	}

	async map(userToken: ISourceEntity<IUserTokenSource>): Promise<ISourceItem<IUserTokenSource>> {
		return userToken;
	}

	async $create(create: ISourceCreate<IUserTokenSource>): Promise<ISourceEntity<IUserTokenSource>> {
		return this.prisma.userToken.create({
			data: create,
		});
	}

	createToId({userId, tokenId}: ISourceCreate<IUserTokenSource>): Promise<{ id: string }> {
		return this.prisma.userToken.findUniqueOrThrow({
			where: {
				userId_tokenId: {
					userId,
					tokenId,
				}
			}
		});
	}

	async $patch({id}: UndefinableOptional<ISourceCreate<IUserTokenSource>> & IWithIdentity): Promise<ISourceEntity<IUserTokenSource>> {
		return this.prisma.userToken.findUniqueOrThrow({
			where: {id}
		});
	}
}
