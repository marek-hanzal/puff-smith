import {ImportIcon} from "@/puff-smith";
import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {ImportPageMenu} from "@/puff-smith/site/root/import";
import {ImportControl} from "@/puff-smith/site/shared/job";
import {CreateTemplate} from "@leight-core/leight";

export default withRootLayout(function Import() {
	return <RootPage
		name={"root.common.import"}
	>
		<RootMenu/>
		<ImportPageMenu/>
		<CreateTemplate
			icon={<ImportIcon/>}
			span={24}
			label={"shared.import"}
		>
			<ImportControl
				group={"root"}
			/>
		</CreateTemplate>
	</RootPage>;
});
