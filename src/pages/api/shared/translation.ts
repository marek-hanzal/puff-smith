import {ListEndpoint} from "@leight-core/endpoint";
import {ITranslation} from "@leight-core/api";

export default ListEndpoint<"Translations", ITranslation[]>(({res}) => {
	res.status(200).json([]);
});

