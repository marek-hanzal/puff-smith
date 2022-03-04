import {NextApiRequest, NextApiResponse} from "next";

//
// export type IQueryApiResponse<T extends Prisma.z_vapeFindManyArgs> = Prisma.CheckSelect<T, Array<z_vape>, Array<Prisma.z_vapeGetPayload<T>>>;
//
// export const useQueryApi = <T extends Prisma.z_vapeFindManyArgs>(select?: Prisma.SelectSubset<T, Prisma.z_vapeFindManyArgs>) => {
// 	return createPostQuery<never, Prisma.SelectSubset<T, Prisma.z_vapeFindManyArgs>, IQueryApiResponse<T>>('/api/lab/vape/query')(select);
// }

export default async (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({});
}
