import {
    asyncContainer,
    ContainerClass
}                           from "@/puff-smith/service/Container";
import {ITranslationCreate} from "@/puff-smith/service/translation/interface";
import {TranslationSource}  from "@/puff-smith/service/translation/TranslationSource";
import {
    ITranslation,
    MutationEndpoint
}                           from "@leight-core/viv";

export default MutationEndpoint<ContainerClass, ITranslationCreate, ITranslation>({
	name:      "TranslationPush",
	container: asyncContainer,
	handler:   async ({container, request}) => {
		const translationSource = TranslationSource().withContainer(container);
		return translationSource.mapper.toItem.map(await translationSource.import(request));
	}
});
