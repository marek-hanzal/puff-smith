import {TranslationIcon}            from "@/puff-smith/component/icon/TranslationIcon";
import {DEFAULT_LIST_SIZE}          from "@/puff-smith/component/misc";
import {MobileRootPage}             from "@/puff-smith/site/root/@module/component/MobileRootPage";
import {withRootLayout}             from "@/puff-smith/site/root/@module/layout/layout";
import {TranslationList}            from "@/puff-smith/ui/translation/list/TranslationList";
import {TranslationProviderControl} from "@/sdk/api/translation/query";
import {BubbleMenu}                 from "@leight-core/viv";

export default withRootLayout(function Index() {
	return <>
		<MobileRootPage
			title={"root.translation"}
			icon={<TranslationIcon/>}
			onBack={navigate => navigate("/root")}
		>
			<BubbleMenu
				translation={"root.translation"}
				actions={[
					{
						key:     "create.button",
						bold:    true,
						onClick: ({navigate}) => navigate("/root/translation/create"),
					},
				]}
			/>
			<TranslationProviderControl
				defaultSize={DEFAULT_LIST_SIZE}
			>
				<TranslationList/>
			</TranslationProviderControl>
		</MobileRootPage>
	</>;
});
