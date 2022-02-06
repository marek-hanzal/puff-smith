import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidCreateButton, LiquidFilter, LiquidTable} from "@/puff-smith/site/lab/liquid";
import {HomeIcon, ListIcon, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";
import {LiquidsFilterContext} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {isMobile} from "react-device-detect";
import {BreadcrumbButton} from "@/puff-smith";

export default withLabLayout(function List() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.liquid.list"}
		menuSelection={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/liquid'}
					title={'lab.liquid.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<ListIcon/>{t('lab.liquid.list.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<LiquidCreateButton/>
			</Menu.Item>
		</QuickMenu> : <Space>
			<LiquidCreateButton type={'primary'}/>
		</Space>}
	>
		<LiquidsFilterContext>
			<LiquidFilter/>
			<LiquidTable/>
		</LiquidsFilterContext>
	</LabPage>;
});
