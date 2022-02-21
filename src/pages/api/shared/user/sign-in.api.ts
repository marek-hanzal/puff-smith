import type {NextApiRequest, NextApiResponse} from 'next'
import {createPrismaClient} from "@/sdk/prisma";
import {ISession} from "@leight-core/leight";
import {ISignUpRequest} from "@/sdk/shared/user";

const prisma = createPrismaClient();

type IEndpoint<TRequest, TResponse> = (req: NextApiRequest, res: NextApiResponse<TResponse>) => void;

export interface ISignInEndpoint extends IEndpoint<ISignUpRequest, ISession | null> {
}

const SignInEndpoint: ISignInEndpoint = async (req, res) => {
	res.status(200).json(null);
};

export default SignInEndpoint;
