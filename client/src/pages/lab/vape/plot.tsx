import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeCreateButton, VapeFilter, VapeListButton, VapePlot, VapeTable} from "@/puff-smith/site/lab/vape";
import {HomeIcon, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BarChartOutlined} from "@ant-design/icons";
import {isMobile} from "react-device-detect";
import {BreadcrumbButton} from "@/puff-smith";

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.vape.plot"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/vape'}
					title={'lab.vape.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<BarChartOutlined/>{t('lab.vape.plot.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<VapeCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<VapeListButton/>
			</Menu.Item>
		</QuickMenu> : <Space>
			<VapeListButton/>
			<VapeCreateButton type={'primary'}/>
		</Space>}
	>
		<VapesFilterContext>
			<VapeFilter/>
			<VapePlot
				selected={['median']}
			/>
			<Divider/>
			<VapeTable/>
		</VapesFilterContext>
	</LabPage>;
});
