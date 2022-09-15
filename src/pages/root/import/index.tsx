import {ImportIcon} from "@/puff-smith/component/icon/ImportIcon";
import {BrowserRootPage} from "@/puff-smith/site/root/@module/component/BrowserRootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {Uploader} from "@/puff-smith/site/shared/file/@module/component/Uploader";
import {useImportMutation} from "@/sdk/api/file/import";
import {Template, useNavigate} from "@leight-core/client";
import {message} from "antd";
import {useTranslation} from "react-i18next";

export default withRootLayout(function Index() {
	const {t} = useTranslation();
	const importMutation = useImportMutation();
	const navigate = useNavigate<{ name: string }>();
	return <BrowserRootPage
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
					importMutation.mutate({fileId: file.id}, {
						onSuccess: async () => {
							message.success(t("root.import.execute.success"));
							navigate("/root/job/running", {name: "import"});
						},
						onError: async e => {
							console.error(e);
							message.error(t("root.import.execute.error"));
						},
					});
				}}
			/>
		</Template>
	</BrowserRootPage>;
});
