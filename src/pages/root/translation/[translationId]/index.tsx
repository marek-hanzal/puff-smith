import {TranslationIcon}   from "@/puff-smith/component/icon/TranslationIcon";
import {ITranslationFetch} from "@/puff-smith/service/translation/interface";
import {TranslationSource} from "@/puff-smith/service/translation/TranslationSource";
import {MobileRootPage}    from "@/puff-smith/site/root/@module/component/MobileRootPage";
import {withRootLayout}    from "@/puff-smith/site/root/@module/layout/layout";
import {TranslationView}   from "@/puff-smith/ui/translation/view/TranslationView";

export default withRootLayout(function Index({translation}: ITranslationFetch) {
	return <MobileRootPage
		onBack={navigate => navigate("/root/translation")}
		title={"root.translation.translation"}
		values={{translation}}
		icon={<TranslationIcon/>}
	>
		<TranslationView translation={translation}/>
	</MobileRootPage>;
});

export const getServerSideProps = TranslationSource().withFetch("translation", "translationId");
