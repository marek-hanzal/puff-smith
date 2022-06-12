import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {RowInline} from "@/puff-smith/component/RowInline";
import {AtomizerFilter} from "@/puff-smith/site/inventory/atomizer/@module/filter/AtomizerFilter";
import {AtomizerInventoryList} from "@/puff-smith/site/inventory/atomizer/@module/list/AtomizerInventoryList";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildCreateForm} from "@/puff-smith/site/lab/build/@module/form/BuildCreateForm";
import {AtomizerCreateForm} from "@/puff-smith/site/shared/atomizer/@module/form/AtomizerCreateForm";
import {AtomizerInventoryProviderControl, useAtomizerInventoryCountQuery} from "@/sdk/api/inventory/atomizer/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, ButtonLink, DrawerButton, EditIcon, ListIcon, TabInline, Template} from "@leight-core/client";
import {Alert, Tabs} from "antd";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	const atomizerInventoryCountQuery = useAtomizerInventoryCountQuery();
	return <LabPage
		title={"lab.build.create"}
		menuSelection={["/lab/build"]}
		onBack={navigate => navigate("/lab/build")}
		icon={<BuildIcon/>}
		extra={<ButtonBar>
			<ButtonLink
				href={"/lab/build"}
				icon={<ListIcon/>}
				label={"lab.build.index.button"}
			/>
			<DrawerButton
				size={"large"}
				type={"primary"}
				icon={<EditIcon/>}
				width={960}
				title={"lab.atomizer.create.title"}
				label={"lab.atomizer.create.button"}
			>
				<Alert type={"success"} message={t("lab.build.atomizer.create.alert")}/>
				<AtomizerCreateForm
					onSuccess={({navigate, response}) => {
						navigate("/lab/build/create/atomizer/[atomizerId]", {
							atomizerId: response.id,
						});
					}}
					toMutation={values => ({
						...values,
						withInventory: true,
					})}
				/>
			</DrawerButton>
		</ButtonBar>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/lab"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/lab/build"}
				label={"lab.build.label"}
			/>
			<BreadcrumbIcon
				icon={<BuildIcon/>}
				label={"lab.build.create.label"}
			/>
		</Breadcrumbs>}
		withHelp={{
			translation: "lab.build.create",
		}}
	>
		<Tabs size={"large"}>
			<Tabs.TabPane key={"atomizer"} tab={<TabInline icon={<AtomizerIcon/>} title={"lab.build.create.atomizer.tab"}/>}>
				<AtomizerInventoryProviderControl
					defaultSize={5}
				>
					<AtomizerInventoryList
						header={() => <RowInline>
							<AtomizerFilter
								toFilter={values => ({atomizer: values})}
							/>
						</RowInline>}
					/>
				</AtomizerInventoryProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"quick-build"} disabled={atomizerInventoryCountQuery.isLoading || atomizerInventoryCountQuery.data === 0} tab={<TabInline icon={<BuildIcon/>} title={"lab.build.create.quick-build.tab"}/>}>
				<Template span={10}>
					<BuildCreateForm/>
				</Template>
			</Tabs.TabPane>
		</Tabs>
	</LabPage>;
});
