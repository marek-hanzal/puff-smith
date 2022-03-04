import {ListEndpoint} from "@leight-core/server";
import {ITranslations} from "@leight-core/api";

export default ListEndpoint<"Translations", ITranslations>(({res}) => {
	res.status(200).json({
		translations: [],
	});
});

