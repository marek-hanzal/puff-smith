import type {NextApiRequest, NextApiResponse} from 'next'
import {IClient} from "@leight-core/leight";

export default (req: NextApiRequest, res: NextApiResponse<IClient>) => {
	res.status(200).json({
		discovery: '/api/discovery',
	})
}
