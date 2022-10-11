import {ImportIcon}         from "@/puff-smith/component/icon/ImportIcon";
import {BrowserRootPage}    from "@/puff-smith/site/root/@module/component/BrowserRootPage";
import {MobileRootPage}     from "@/puff-smith/site/root/@module/component/MobileRootPage";
import {withRootLayout}     from "@/puff-smith/site/root/@module/layout/layout";
import {Uploader}           from "@/puff-smith/site/shared/file/@module/component/Uploader";
import {useImportMutation}  from "@/sdk/api/file/import";
import {useRestoreMutation} from "@/sdk/api/file/restore";
import {
	TabTitle,
	Template,
	useNavigate
}                           from "@leight-core/client";
import {
	message,
	Result,
	Tabs
}                           from "antd";
import {useTranslation}     from "react-i18next";

export default withRootLayout(function Index() {
	const {t}             = useTranslation();
	const importMutation  = useImportMutation();
	const restoreMutation = useRestoreMutation();
	const navigate        = useNavigate<{ name: string }>();
	return <>
		<BrowserRootPage
			title={"root.import"}
			menuSelection={["/root/import"]}
			icon={<ImportIcon/>}
		>
			<Tabs>
				<Tabs.TabPane key={"import"} tab={<TabTitle label={"root.import"}/>}>
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
									onError:   async e => {
										console.error(e);
										message.error(t("root.import.execute.error"));
									},
								});
							}}
						/>
					</Template>
				</Tabs.TabPane>
				<Tabs.TabPane key={"restore"} tab={<TabTitle label={"root.restore"}/>}>
					<Template>
						<Uploader
							icon={<ImportIcon/>}
							limit={2048 * 1000}
							path={"/restore"}
							replace
							translation={"root.restore"}
							onSuccess={file => {
								restoreMutation.mutate({fileId: file.id}, {
									onSuccess: async () => {
										message.success(t("root.restore.execute.success"));
										navigate("/root/job/running", {name: "restore"});
									},
									onError:   async e => {
										console.error(e);
										message.error(t("root.restore.execute.error"));
									},
								});
							}}
						/>
					</Template>
				</Tabs.TabPane>
			</Tabs>
		</BrowserRootPage>
		<MobileRootPage
			title={"root.import"}
			onBack={navigate => navigate("/root")}
			icon={<ImportIcon/>}
		>
			<Result
				style={{padding: 0}}
				icon={<></>}
			>
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
							onError:   async e => {
								console.error(e);
								message.error(t("root.import.execute.error"));
							},
						});
					}}
				/>
			</Result>
		</MobileRootPage>
	</>;
});
