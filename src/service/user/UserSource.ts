import {Container}       from "@/puff-smith/service/Container";
import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import prisma            from "@/puff-smith/service/side-effect/prisma";
import {IUserSource}     from "@/puff-smith/service/user/interface";
import {
	IUser,
	SourceInfer
}                        from "@leight-core/api";
import {
	pageOf,
	User,
	withFetch
}                        from "@leight-core/server";
import {uniqueOf}        from "@leight-core/utils";

export class UserSourceClass extends ContainerSource<IUserSource> implements IUserSource {
	constructor() {
		super("user", prisma);
	}

	async toItem({UserToken, name, id, image, email}: SourceInfer.Entity<IUserSource>): Promise<SourceInfer.Item<IUserSource>> {
		let tokens     = UserToken?.map(({token}) => token) || [];
		const tokenIds = UserToken?.map(({token}) => token.id) || [];
		// for (const {certificate} of UserCertificate) {
		// 	tokens = tokens.concat(certificate.CertificateToken.map(({token}) => token)).concat([{
		// 		id: `certificate.${certificate.name}`,
		// 		name: `certificate.${certificate.name}`,
		// 	}]);
		// }
		// for (const {license} of UserLicense) {
		// 	tokens = tokens.concat(license.LicenseToken.map(({token}) => token)).concat([{
		// 		id: `license.${license.name}`,
		// 		name: `license.${license.name}`,
		// 	}]);
		// }
		return {
			id,
			name,
			email,
			image,
			tokens: uniqueOf(tokens, "name"),
			tokenIds,
		};
	}

	async $get(id: string): Promise<SourceInfer.Entity<IUserSource>> {
		return this.container.prisma.user.findUniqueOrThrow({
			where:   {id},
			include: {
				UserToken:       {
					include: {
						token: true,
					},
				},
				UserCertificate: {
					include: {
						certificate: {
							include: {
								CertificateToken: {
									include: {
										token: true,
									},
								},
							},
						},
					},
				},
				UserLicense:     {
					where:   {
						OR: [
							{from: {gte: new Date()}, to: {lte: new Date()}},
							{from: {gte: new Date()}, to: null},
							{from: null, to: {lte: new Date()}},
							{from: null, to: null},
						]
					},
					include: {
						license: {
							include: {
								LicenseToken: {
									include: {
										token: true,
									},
								},
							},
						},
					},
				},
			},
		});
	}

	async $count(query: SourceInfer.Query<IUserSource>): Promise<number> {
		return this.container.prisma.user.count({});
	}

	async $query({orderBy, ...query}: SourceInfer.Query<IUserSource>): Promise<SourceInfer.Entity<IUserSource>[]> {
		return this.container.prisma.user.findMany({
			orderBy,
			include: {
				UserToken:       {
					include: {
						token: true,
					},
				},
				UserCertificate: {
					include: {
						certificate: {
							include: {
								CertificateToken: {
									include: {
										token: true,
									},
								},
							},
						},
					},
				},
				UserLicense:     {
					where:   {
						OR: [
							{from: {gte: new Date()}, to: {lte: new Date()}},
							{from: {gte: new Date()}, to: null},
							{from: null, to: {lte: new Date()}},
							{from: null, to: null},
						]
					},
					include: {
						license: {
							include: {
								LicenseToken: {
									include: {
										token: true,
									},
								},
							},
						},
					},
				},
			},
			...pageOf(query),
		});
	}

	async asUser(userId?: string | null): Promise<IUser> {
		const $user = userId ? await this.mapper.toItem.map(await this.get(userId)) : null;
		return User({
			userId,
			tokens: $user?.tokens?.map(({name}) => name),
		});
	}

	async createToken(token: string): Promise<any> {
		return this.container.useUserTokenSource(async userTokenSource => {
			return this.container.useTokenSource(async tokenSource => {
				const $token = await tokenSource.import({
					name: token,
				});
				await userTokenSource.import({
					userId:  this.container.user.required(),
					tokenId: $token.id,
				});
			});
		});
	}

	async handleCommonUser(): Promise<any> {
		return Promise.all([
			this.createToken("/lab*"),
			this.createToken("/market*"),
			this.createToken("/inventory*"),
		]);
	}

	async handleRootUser(): Promise<any> {
		return Promise.all([
			this.createToken("*"),
		]);
	}
}

export const UserSource     = () => new UserSourceClass();
export const nextUserSource = () => withFetch(async () => Container().useUserSource(async t => t), "user", "userId");
