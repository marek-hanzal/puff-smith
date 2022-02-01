import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon, VapeIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Space} from "antd";
import {RecentVapeTable, VapeCreateButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {ButtonBar, Card, Template} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {ButtonLink, HomeIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.vape"}
		selected={['/lab/vape']}
		onBack={navigate => navigate('/lab')}
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
					<VapeIcon/>{t('lab.vape.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
	>
		<LabMenu/>
		<Template
			icon={<VapeIcon/>}
			label={'lab.vape'}
			span={24}
		>
			<ButtonBar>
				<VapeCreateButton type={'primary'}/>
				<VapeListButton size={'middle'}/>
			</ButtonBar>
			<Divider/>
			<Card
				bordered={false}
				title={t('lab.vape.latest.title')}
			>
				<RecentVapeTable/>
			</Card>
		</Template>
		<Divider/>
	</LabPage>;
});
