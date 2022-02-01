import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {ButtonBar, Card, Template} from "@leight-core/leight";
import {BuildIcon} from "@/puff-smith";
import {Divider} from "antd";
import {useTranslation} from "react-i18next";
import {BuildCreateButton, BuildListButton, LatestBuildTable} from "@/puff-smith/site/lab/build";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.build"}
		onBack={navigate => navigate('/lab')}
		selected={['/lab/build']}
	>
		<LabMenu/>
		<Template
			icon={<BuildIcon/>}
			label={'lab.build'}
			span={24}
		>
			<ButtonBar>
				<BuildCreateButton type={'primary'}/>
				<BuildListButton/>
			</ButtonBar>
			<Divider/>
			<Card
				bordered={false}
				title={t('lab.build.latest.title')}
			>
				<LatestBuildTable/>
			</Card>
		</Template>
		<Divider/>
	</LabPage>;
});
