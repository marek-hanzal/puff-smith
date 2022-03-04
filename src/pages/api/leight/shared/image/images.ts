import {QueryEndpoint} from "@leight-core/server";
import {IQuery} from "@leight-core/api";

export interface IImagesDto {
}

export default QueryEndpoint<"Images", IQuery, IImagesDto>(async () => {
	return {
		count: 0,
		items: [],
		pages: 0,
		size: 0,
		total: 0,
	}
});
