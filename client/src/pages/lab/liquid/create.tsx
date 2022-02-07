import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton} from "@/puff-smith";
import {CreateLiquidForm, LiquidListButton} from "@/puff-smith/site/lab/liquid";
import {CreateIcon, CreateTemplate, HomeIcon, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Create() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.liquid.create"}
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
				<BreadcrumbButton
					href={'/lab/liquid/list'}
					title={'lab.liquid.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<CreateIcon/>{t('lab.liquid.create.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<LiquidListButton/>
			</Menu.Item>
		</QuickMenu> : <Space>
			<LiquidListButton/>
		</Space>}
	>
		<CreateTemplate>
			<CreateLiquidForm/>
		</CreateTemplate>
	</LabPage>;
});
