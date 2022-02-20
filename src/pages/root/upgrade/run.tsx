import {RootMenu, RootPage, withRootLayout} from "@/puff-smith/site/root";
import {UpgradePageMenu} from "@/puff-smith/site/root/upgrade";
import {JobTable} from "@/puff-smith/site/shared/job";
import {useUpgradeMutation, useUpgradesQuery} from "@/sdk/edde/api/root/upgrade/endpoint";
import {ArrowRightOutlined, ArrowUpOutlined} from "@ant-design/icons";
import {Button, Result} from "antd";
import {useTranslation} from "react-i18next";
import {useJobsQueryInvalidate} from "@/sdk/edde/api/shared/job/endpoint";

// noinspection JSUnusedGlobalSymbols
export default withRootLayout(function Run() {
	const {t} = useTranslation();
	const upgradeMutation = useUpgradeMutation();
	const jobsQueryInvalidate = useJobsQueryInvalidate();
	const upgradesQuery = useUpgradesQuery({page: 0, size: 1, filter: {active: false}});
	return <RootPage
		title={"root.upgrade.run"}
	>
		<RootMenu/>
		<UpgradePageMenu/>
		<Result
			icon={<ArrowUpOutlined/>}
			title={t("root.upgrade.run.title")}
			subTitle={<Button
				type={"primary"}
				size={"large"}
				icon={<ArrowRightOutlined/>}
				disabled={upgradesQuery.isLoading || upgradeMutation.isLoading || (upgradesQuery.isSuccess && upgradesQuery.data.items.length === 0)}
				onClick={() => {
					upgradeMutation.mutate(undefined, {
						onSuccess: () => jobsQueryInvalidate(),
					});
				}}
			>
				{t("root.upgrade.run.button")}
			</Button>}
		/>
		<JobTable filter={{
			services: [
				"Edde\\Phinx\\UpgradeJobService",
			],
		}}/>
	</RootPage>;
});
