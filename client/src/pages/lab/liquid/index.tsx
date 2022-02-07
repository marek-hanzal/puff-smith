import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, LiquidIcon} from "@/puff-smith";
import {ButtonBar, HomeIcon, Template} from "@leight-core/leight";
import {LiquidCreateButton, LiquidFilter, LiquidListButton, LiquidTable} from "@/puff-smith/site/lab/liquid";
import {Breadcrumb, Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {LiquidsFilterContext} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {isBrowser} from "react-device-detect";

const LiquidButtonBar = () => {
	return <ButtonBar>
		<LiquidCreateButton type={'primary'}/>
		<LiquidListButton size={'middle'}/>
	</ButtonBar>;
}

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.liquid"}
		menuSelection={['/lab/liquid']}
		onBack={navigate => navigate('/lab')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<LiquidIcon/>{t('lab.liquid.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isBrowser && <LiquidButtonBar/>}
	>
		<Template
			span={24}
			mobileExtra={<>
				<LiquidButtonBar/>
				<Divider/>
			</>}
		>
			<LiquidsFilterContext>
				<LiquidFilter/>
				<LiquidTable/>
			</LiquidsFilterContext>
		</Template>
		<Divider/>
	</LabPage>;
});
