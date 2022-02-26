import {ImportIcon} from "@/puff-smith";
import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {Template} from "@leight-core/common";
import {Divider} from "antd";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.import"}
	>
		<Template
			icon={<ImportIcon/>}
			label={'root.import'}
			extra={<Divider/>}
		>
			<Uploader/>
			import control
		</Template>
	</RootPage>;
});
