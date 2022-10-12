import {
	ContainerClass,
	ContainerPromise
}                           from "@/puff-smith/service/Container";
import {ITranslationCreate} from "@/puff-smith/service/translation/interface";
import {TranslationSource}  from "@/puff-smith/service/translation/TranslationSource";
import {ITranslation}       from "@leight-core/api";
import {MutationEndpoint}   from "@leight-core/server";

export default MutationEndpoint<ContainerClass, ITranslationCreate, ITranslation>({
	name:      "TranslationPush",
	container: ContainerPromise,
	handler:   async ({container, request}) => {
		const translationSource = TranslationSource().withContainer(container);
		return translationSource.mapper.toItem.map(await translationSource.import(request));
	}
});
