import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeCreateButton, VapeFilter, VapePlotButton, VapeTable} from "@/puff-smith/site/lab/vape";
import {HomeIcon, ListIcon} from "@leight-core/leight";
import {Breadcrumb, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";
import {VapesFilterContext} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {isMobile} from "react-device-detect";
import {QuickMenu} from "@leight-core/leight/dist";
import {BreadcrumbButton} from "@/puff-smith";

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.vape.list"}
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
					<ListIcon/>{t('lab.vape.list.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<VapeCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<VapePlotButton/>
			</Menu.Item>
		</QuickMenu> : <Space>
			<VapePlotButton/>
			<VapeCreateButton type={'primary'}/>
		</Space>}
	>
		<VapesFilterContext>
			<VapeFilter/>
			<VapeTable/>
		</VapesFilterContext>
	</LabPage>;
});
