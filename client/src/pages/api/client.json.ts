import {IClient} from "@leight-core/leight";
import {IncomingMessage, ServerResponse} from "http";

export default function handler(req: IncomingMessage, res: ServerResponse) {
	(res as any).status(200).json({
		discovery: process.env.BACKEND_HOST + "/api/discovery/index",
	} as IClient);
};
