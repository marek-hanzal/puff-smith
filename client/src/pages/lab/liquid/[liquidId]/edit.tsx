import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, LiquidIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Space} from "antd";
import {LiquidCreateButton, LiquidLinkButton, LiquidListButton, PatchLiquidForm} from "@/puff-smith/site/lab/liquid";
import {LiquidPage} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {BackIcon, ButtonBar, CreateIcon, CreateMenuItem, EditIcon, EditTemplate, HomeIcon, ListIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Edit() {
	const {t} = useTranslation();
	const {liquidId} = useParams();
	return <LiquidPage
		title={"lab.liquid.edit"}
		menuSelection={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid/[liquidId]', {liquidId})}
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
				<BreadcrumbButton
					href={'/lab/liquid/[liquidId]'}
					query={{liquidId}}
					title={'lab.liquid.index.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<EditIcon/>{t('lab.liquid.edit.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem('lab.liquid.button.create', '/lab/liquid/create', <CreateIcon/>)}
			{CreateMenuItem('lab.liquid.button.list', '/lab/liquid/list', <ListIcon/>)}
		</LabMenuDrawerButton> : <ButtonBar>
			<LiquidListButton/>
			<LiquidCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{liquid => <>
			<EditTemplate
				icon={<LiquidIcon/>}
				label={'lab.liquid'}
				extra={<>
					<Space>
						<LiquidLinkButton icon={<BackIcon/>} liquid={liquid}/>
					</Space>
					<Divider/>
				</>}
			>
				<PatchLiquidForm liquid={liquid}/>
			</EditTemplate>
			<Divider/>
		</>}
	</LiquidPage>;
});
