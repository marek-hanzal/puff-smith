import {ImportIcon} from "@/puff-smith";
import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {Template, useNavigate} from "@leight-core/client";
import {Uploader} from "@/puff-smith/site/shared/file";
import {useImportPromise} from "@/sdk/api/leight/shared/file/[fileId]/import";
import {message} from "antd";
import {useTranslation} from "react-i18next";

export default withRootLayout(function Index() {
	const {t} = useTranslation();
	const importPromise = useImportPromise();
	const navigate = useNavigate();
	return <RootPage
		title={"root.import"}
		menuSelection={['/root/import']}
	>
		<Template>
			<Uploader
				icon={<ImportIcon/>}
				limit={2048 * 1000}
				path={'/import'}
				replace
				translation={'root.import'}
				onSuccess={file => {
					importPromise(undefined, {fileId: file.id})
						.then(e => {
							message.success(t('root.import.execute.success'));
							navigate('/root/job');
						})
						.catch(e => {
							console.error(e);
							message.error(t('root.import.execute.error'));
						})
				}}
			/>
		</Template>
	</RootPage>;
});
