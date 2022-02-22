import {createPrismaClient} from "@/puff-smith/prisma";
import {IMutationEndpoint, ISession} from "@leight-core/leight";

const prisma = createPrismaClient();

export interface ISignUpRequest {
	readonly name: string;
	readonly login: string;
	readonly password: string;
}

export const SignUpEndpoint: IMutationEndpoint<ISignUpRequest, ISession | null> = async (req, res) => {
	res.status(200).json(null);
};

export default SignUpEndpoint;
