import {PrismaClient} from "@prisma/client";
import {
    inject,
    injectable
}                     from "tsyringe";

export interface IToken {
    sub?: string;
    tokens: string[];
}

export interface IHandleTokenProps<T extends IToken> {
    token: T;
    isNewUser?: boolean;
}

@injectable()
export class UserService {
    constructor(@inject("PrismaClient") protected prisma: PrismaClient) {
    }

    public async handleToken<T extends IToken>({token, isNewUser}: IHandleTokenProps<T>): Promise<T> {
        await ((isNewUser && await this.prisma.user.count()) === 1 ? this.newRootUser({token, isNewUser}) : this.newCommonUser({token, isNewUser}));

        return token;
    }

    /**
     * Define defaults for the new root user (tokens and co.).
     */
    private async newRootUser<T extends IToken>({token: {sub}}: IHandleTokenProps<T>): Promise<void> {
        const user = this.prisma.user.findUniqueOrThrow({where: {id: sub}});
    }

    /**
     * Define defaults for the new common user (tokens and co.).
     */
    private async newCommonUser<T extends IToken>({token: {sub}}: IHandleTokenProps<T>): Promise<void> {
        const user = this.prisma.user.findUniqueOrThrow({where: {id: sub}});
    }
}
