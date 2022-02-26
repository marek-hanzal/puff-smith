import {QueryEndpoint} from "@leight-core/endpoint";

export interface IImagesDto {
}

export default QueryEndpoint<"Images", any, IImagesDto>(({res}) => {
	res.status(200).json({
		count: 0,
		items: [],
		pages: 0,
		size: 0,
		total: 0,
	});
});
