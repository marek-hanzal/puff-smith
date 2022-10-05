import {TranslationIcon}       from "@/puff-smith/component/icon/TranslationIcon";
import {MobileRootPage}        from "@/puff-smith/site/root/@module/component/MobileRootPage";
import {withRootLayout}        from "@/puff-smith/site/root/@module/layout/layout";
import {TranslationCreateForm} from "@/puff-smith/ui/translation/form/TranslationCreateForm";

export default withRootLayout(function Index() {
	return <>
		<MobileRootPage
			title={"root.translation.create"}
			icon={<TranslationIcon/>}
			onBack={navigate => navigate("/root/translation")}
		>
			<TranslationCreateForm
				onSuccess={({navigate, response}) => {
					navigate("/root/translation/[translationId]", {translationId: response.id});
				}}
			/>
		</MobileRootPage>
	</>;
});
