import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {Template} from "@leight-core/leight";
import {BuildIcon} from "@/puff-smith";
import {Card, Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {BuildListButton, LatestBuildTable} from "@/puff-smith/site/lab/build";
import {BuildCreateButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildCreateButton";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		name={"lab.build"}
		selected={['/lab/build']}
	>
		<LabMenu/>
		<Template
			icon={<BuildIcon/>}
			label={'lab.build'}
			extra={
				<>
					<Space split={<Divider type={'vertical'}/>}>
						<BuildCreateButton/>
						<BuildListButton size={'middle'}/>
					</Space>
					<Divider/>
				</>
			}
			span={24}
		>
			<Card title={t('lab.build.latest.title')} extra={<BuildListButton size={'small'} icon={undefined} title={'lab.build.button.all.list'}/>}>
				<LatestBuildTable/>
			</Card>
		</Template>
	</LabPage>;
});
