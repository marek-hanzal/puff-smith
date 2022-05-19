import {IEndpointParams} from "@leight-core/api";
import {withConflict} from "@leight-core/server";

export const handlePuffiesException = async <T>({res}: IEndpointParams<any, any>, callback: () => T) => {
	try {
		return await callback();
	} catch (e) {
		if ((e as Error).message?.includes("Not enough puffies")) {
			return withConflict(res, "Not enough puffies");
		}
		throw e;
	}
};
