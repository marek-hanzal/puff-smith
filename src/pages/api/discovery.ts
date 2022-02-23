import type {NextApiRequest, NextApiResponse} from 'next'
import {IDiscovery} from "@leight-core/leight";

export default (req: NextApiRequest, res: NextApiResponse<IDiscovery>) => {
	// glob.sync('src/pages/api/**/*.ts').forEach(source => {
	// 	const file = ts.createSourceFile(source, fs.readFileSync(source, 'utf8'), ts.ScriptTarget.Latest);
	// })
	res.status(200).json({
		index: {},
	})
}
