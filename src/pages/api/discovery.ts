import type {NextApiRequest, NextApiResponse} from 'next'
import {IDiscovery} from "@leight-core/leight/dist";

export default (req: NextApiRequest, res: NextApiResponse<IDiscovery>) => {
	res.status(200).json({
		index: {},
	})
}
