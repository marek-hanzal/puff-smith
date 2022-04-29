import {IPrismaClientTransaction, IUserService} from "@leight-core/api";

export interface IServiceCreate {
	prisma: IPrismaClientTransaction;
	userService: IUserService;
}
