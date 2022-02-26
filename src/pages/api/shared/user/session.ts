import {createPrismaClient} from "@/puff-smith/prisma";
import {IFetchEndpoint, ISession} from "@leight-core/common";

const prisma = createPrismaClient();

export const SessionEndpoint: IFetchEndpoint<ISession | null> = async (req, res) => {
	res.status(200).json(null);
}

export default SessionEndpoint;
