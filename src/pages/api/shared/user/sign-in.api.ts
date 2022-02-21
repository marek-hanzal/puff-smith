import {createPrismaClient} from "@/puff-smith/prisma";
import {IEndpoint, ISession} from "@leight-core/leight";

const prisma = createPrismaClient();

export interface ISignUpRequest {
	readonly name: string;
	readonly login: string;
	readonly password: string;
}

export const SignInEndpoint: IEndpoint<ISignUpRequest, ISession | null> = async (req, res) => {
	res.status(200).json(null);
};

export default SignInEndpoint;
