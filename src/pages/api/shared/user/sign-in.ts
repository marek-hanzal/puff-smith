import {createPrismaClient} from "@/puff-smith/prisma";
import {IMutationEndpoint, ISession} from "@leight-core/leight";

const prisma = createPrismaClient();

export interface ISignInRequest {
	readonly login: string;
	readonly password: string;
}

export const SignInEndpoint: IMutationEndpoint<ISignInRequest, ISession | null> = async (req, res) => {
	res.status(200).json(null);
};

export default SignInEndpoint;
