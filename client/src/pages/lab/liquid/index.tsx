import {LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidIcon} from "@/puff-smith";
import {ButtonBar, ButtonLink, HomeIcon, Template} from "@leight-core/leight";
import {LiquidCreateButton, LiquidFilter, LiquidListButton, LiquidTable} from "@/puff-smith/site/lab/liquid";
import {Breadcrumb, Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {LiquidsFilterContext} from "@/sdk/puff-smith/api/lab/liquid/endpoint";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LabPage
		title={"lab.liquid"}
		selected={['/lab/liquid']}
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
					<LiquidIcon/>{t('lab.liquid.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
	>
		<Template
			icon={<LiquidIcon/>}
			label={'lab.liquid'}
			span={24}
		>
			<ButtonBar>
				<LiquidCreateButton type={'primary'}/>
				<LiquidListButton size={'middle'}/>
			</ButtonBar>
			<Divider/>
			<LiquidsFilterContext>
				<LiquidFilter/>
				<LiquidTable/>
			</LiquidsFilterContext>
		</Template>
		<Divider/>
	</LabPage>;
});
