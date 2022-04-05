import {withConflict} from "@leight-core/server";
import {NextApiResponse} from "next";

export const handlePuffiesException = async <T>(res: NextApiResponse, callback: () => T) => {
	try {
		return await callback();
	} catch (e) {
		if ((e as Error).message?.includes("Not enough puffies")) {
			return withConflict(res, "Not enough puffies");
		}
		throw e;
	}
};
