import {QueryEndpoint} from "@leight-core/endpoint";
import {IQuery} from "@leight-core/api";

export interface IImagesDto {
}

export default QueryEndpoint<"Images", IQuery, IImagesDto>(({res}) => {
	res.status(200).json({
		count: 0,
		items: [],
		pages: 0,
		size: 0,
		total: 0,
	});
});
