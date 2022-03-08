import {ImportIcon} from "@/puff-smith";
import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {Template} from "@leight-core/client";
import {Divider} from "antd";
import {Uploader} from "@/puff-smith/site/shared/file";
import {useImportPromise} from "@/sdk/api/leight/shared/file/[fileId]/import";

export default withRootLayout(function Index() {
	const importPromise = useImportPromise();
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
				replace
				translation={'root.import'}
				onSuccess={file => importPromise(undefined, {fileId: file.id})}
			/>
		</Template>
	</RootPage>;
});
