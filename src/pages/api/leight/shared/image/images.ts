import {IQueryEndpoint} from "@leight-core/leight";

export interface IImagesDto {
}

export const ImagesEndpoint: IQueryEndpoint<any, IImagesDto> = async (req, res) => {
	res.status(200).json({
		count: 0,
		items: [],
		pages: 0,
		size: 0,
		total: 0,
	});
}

export default ImagesEndpoint;
