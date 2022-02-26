import {ImportIcon} from "@/puff-smith";
import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/../../../_site/root";
import {ImportPageMenu} from "@/puff-smith/../../../_site/root/import";
import {ImportControl} from "@/puff-smith/../../../_site/shared/job";
import {CreateTemplate} from "@leight-core/common";

export default withRootLayout(function Import() {
	return <RootPage
		title={"root.common.import"}
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
