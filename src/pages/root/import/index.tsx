import {ImportIcon} from "@/puff-smith/component/icon/ImportIcon";
import {RootPage} from "@/puff-smith/site/root/@module/component/RootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {Uploader} from "@/puff-smith/site/shared/file/@module/component/Uploader";
import {useImportPromise} from "@/sdk/api/file/[fileId]/import";
import {Template, useNavigate} from "@leight-core/client";
import {message} from "antd";
import {useTranslation} from "react-i18next";

export default withRootLayout(function Index() {
	const {t} = useTranslation();
	const importPromise = useImportPromise();
	const navigate = useNavigate<{ name: string }>();
	return <RootPage
		title={"root.import"}
		menuSelection={["/root/import"]}
		icon={<ImportIcon/>}
	>
		<Template>
			<Uploader
				icon={<ImportIcon/>}
				limit={2048 * 1000}
				path={"/import"}
				replace
				translation={"root.import"}
				onSuccess={file => {
					importPromise({fileId: file.id})
						.then(async () => {
							message.success(t("root.import.execute.success"));
							navigate("/root/job", {name: "import"});
						})
						.catch(async e => {
							console.error(e);
							message.error(t("root.import.execute.error"));
						});
				}}
			/>
		</Template>
	</RootPage>;
});
