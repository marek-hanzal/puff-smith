import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon, LiquidIcon} from "@/puff-smith";
import {ButtonBar, Template} from "@leight-core/leight";
import {LiquidCreateButton, LiquidListButton} from "@/puff-smith/site/lab/liquid";
import {Breadcrumb, Divider, Space} from "antd";
import {ButtonLink, HomeIcon} from "@leight-core/leight/dist";
import {useTranslation} from "react-i18next";

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
		<LabMenu/>
		<Template
			icon={<LiquidIcon/>}
			label={'lab.liquid'}
			span={24}
		>
			<ButtonBar>
				<LiquidCreateButton type={'primary'}/>
				<LiquidListButton size={'middle'}/>
			</ButtonBar>
		</Template>
		<Divider/>
	</LabPage>;
});
