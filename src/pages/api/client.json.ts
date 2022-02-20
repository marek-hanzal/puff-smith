import type {NextApiRequest, NextApiResponse} from 'next'
import {ClientConfigDto} from "@/sdk/edde/config/dto";

export default (req: NextApiRequest, res: NextApiResponse<ClientConfigDto>) => {
	res.status(200).json({
		discovery: '/api/discovery',
	})
}
