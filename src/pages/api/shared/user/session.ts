import {createPrismaClient} from "@/puff-smith/prisma";
import {IEndpoint, ISession} from "@leight-core/leight";

const prisma = createPrismaClient();

export const SessionEndpoint: IEndpoint<void, ISession | null> = async (req, res) => {
	res.status(200).json(null);
}

export default SessionEndpoint;
