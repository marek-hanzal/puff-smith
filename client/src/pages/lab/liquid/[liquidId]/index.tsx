import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {BuildIcon, LiquidIcon} from "@/puff-smith";
import {LiquidCreateButton, LiquidEditButton, LiquidListButton, LiquidPreview} from "@/puff-smith/site/lab/liquid";
import {LiquidPage} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {PreviewTemplate, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {ButtonLink, HomeIcon} from "@leight-core/leight/dist";
import {useTranslation} from "react-i18next";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <LiquidPage
		title={"lab.liquid.index"}
		selected={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid/list')}
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
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/liquid'}
					title={'lab.liquid.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/liquid/list'}
					title={'lab.liquid.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<LiquidIcon/>{t('lab.liquid.index.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={<QuickMenu>
			<Menu.Item>
				<LiquidCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<LiquidListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		{liquid => <>
			<LabMenu/>
			<PreviewTemplate
				icon={<LiquidIcon/>}
				label={'lab.liquid.index'}
				extra={<>
					<Space>
						<LiquidEditButton liquid={liquid}/>
					</Space>
					<Divider/>
				</>}
				span={24}
			>
				<LiquidPreview liquid={liquid}/>
			</PreviewTemplate>
			<Divider/>
		</>}
	</LiquidPage>;
});