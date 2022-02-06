import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {RecentVapeTable, VapeCreateButton, VapeListButton, VapePlotButton} from "@/puff-smith/site/lab/vape";
import {ButtonBar, ButtonLink, Card, HomeIcon, Template} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";
import {QuickMenu} from "@leight-core/leight/dist";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.vape"}
		menuSelection={['/lab/vape']}
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
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<VapePlotButton/>
			</Menu.Item>
		</QuickMenu> : <Space>
			<VapePlotButton/>
		</Space>}
	>
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
