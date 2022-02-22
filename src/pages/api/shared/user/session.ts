import {createPrismaClient} from "@/puff-smith/prisma";
import {ISession} from "@leight-core/leight";
import {IEndpoint} from "@leight-core/leight/dist";

const prisma = createPrismaClient();

export const SessionEndpoint: IEndpoint<void, ISession | null> = async (req, res) => {
	res.status(200).json(null);
}

export default SessionEndpoint;
