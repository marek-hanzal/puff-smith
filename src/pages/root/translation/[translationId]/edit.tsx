import {TranslationIcon}      from "@/puff-smith/component/icon/TranslationIcon";
import {ITranslationFetch}    from "@/puff-smith/service/translation/interface";
import {TranslationSource}    from "@/puff-smith/service/translation/TranslationSource";
import {MobileRootPage}       from "@/puff-smith/site/root/@module/component/MobileRootPage";
import {withRootLayout}       from "@/puff-smith/site/root/@module/layout/layout";
import {TranslationPatchForm} from "@/puff-smith/ui/translation/form/TranslationPatchForm";

export default withRootLayout(function Edit({translation}: ITranslationFetch) {
	return <MobileRootPage
		onBack={navigate => navigate("/root/translation")}
		title={"root.translation.edit"}
		values={{translation}}
		icon={<TranslationIcon/>}
	>
		<TranslationPatchForm
			translation={translation}
			onSuccess={({navigate, response}) => {
				navigate("/root/translation/[translationId]", {translationId: response.id});
			}}
		/>
	</MobileRootPage>;
});

export const getServerSideProps = TranslationSource().withFetch("translation", "translationId");
