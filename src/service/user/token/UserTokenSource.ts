import {ContainerSource}  from "@/puff-smith/service/ContainerSource";
import prisma             from "@/puff-smith/service/side-effect/prisma";
import {IUserTokenSource} from "@/puff-smith/service/user/token/interface";
import {
	IWithIdentity,
	SourceInfer,
	UndefinableOptional
}                         from "@leight-core/api";

export const UserTokenSource = () => new UserTokenSourceClass();

export class UserTokenSourceClass extends ContainerSource<IUserTokenSource> implements IUserTokenSource {
	constructor() {
		super("user.token", prisma);
	}

	async map(userToken: SourceInfer.Entity<IUserTokenSource>): Promise<SourceInfer.Item<IUserTokenSource>> {
		return userToken;
	}

	async $create(create: SourceInfer.Create<IUserTokenSource>): Promise<SourceInfer.Entity<IUserTokenSource>> {
		return this.prisma.userToken.create({
			data: create,
		});
	}

	resolveId({userId, tokenId}: SourceInfer.Create<IUserTokenSource>): Promise<IWithIdentity> {
		return this.prisma.userToken.findUniqueOrThrow({
			where: {
				userId_tokenId: {
					userId,
					tokenId,
				}
			}
		});
	}

	async $patch({id}: UndefinableOptional<SourceInfer.Create<IUserTokenSource>> & IWithIdentity): Promise<SourceInfer.Entity<IUserTokenSource>> {
		return this.prisma.userToken.findUniqueOrThrow({
			where: {id}
		});
	}
}
