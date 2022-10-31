import {ContainerSource}  from "@/puff-smith/service/ContainerSource";
import {IUserTokenSource} from "@/puff-smith/service/user/token/interface";
import {
    IWithIdentity,
    SourceInfer,
    UndefinableOptional
}                         from "@leight-core/viv";

export class UserTokenSourceClass extends ContainerSource<IUserTokenSource> implements IUserTokenSource {
	constructor() {
		super("user.token");
	}

	async toItem(userToken: SourceInfer.Entity<IUserTokenSource>): Promise<SourceInfer.Item<IUserTokenSource>> {
		return userToken;
	}

	async $create(create: SourceInfer.Create<IUserTokenSource>): Promise<SourceInfer.Entity<IUserTokenSource>> {
		return this.container.prisma.userToken.create({
			data: create,
		});
	}

	resolveId({userId, tokenId}: SourceInfer.Create<IUserTokenSource>): Promise<IWithIdentity> {
		return this.container.prisma.userToken.findUniqueOrThrow({
			where: {
				userId_tokenId: {
					userId,
					tokenId,
				}
			}
		});
	}

	async $patch({id}: UndefinableOptional<SourceInfer.Create<IUserTokenSource>> & IWithIdentity): Promise<SourceInfer.Entity<IUserTokenSource>> {
		return this.container.prisma.userToken.findUniqueOrThrow({
			where: {id}
		});
	}
}

export const UserTokenSource = () => new UserTokenSourceClass();
