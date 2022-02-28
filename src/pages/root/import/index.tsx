import {ImportIcon} from "@/puff-smith";
import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {Template} from "@leight-core/common";
import {Divider} from "antd";
import {Uploader} from "@/puff-smith/site/shared/file";

export default withRootLayout(function Index() {
	return <RootPage
		title={"root.import"}
		menuSelection={['/root/import']}
	>
		<Template
			icon={<ImportIcon/>}
			label={'root.import'}
			extra={<Divider/>}
		>
			<Uploader
				limit={2048 * 1000}
				path={'/import'}
				translation={'root.import'}
			/>
		</Template>
	</RootPage>;
});
