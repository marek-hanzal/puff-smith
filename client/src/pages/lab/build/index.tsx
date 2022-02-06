import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {ButtonBar, ButtonLink, Card, HomeIcon, Template} from "@leight-core/leight";
import {BuildIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {BuildCreateButton, BuildListButton, LatestBuildTable} from "@/puff-smith/site/lab/build";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.build"}
		onBack={navigate => navigate('/lab')}
		menuSelection={['/lab/build']}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<BuildIcon/>{t('lab.build.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
	>
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
