import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {LiquidIcon} from "@/puff-smith";
import {Divider} from "antd";
import {LiquidCreateButton, LiquidLinkButton, LiquidListButton, PatchLiquidForm} from "@/puff-smith/site/lab/liquid";
import {LiquidPage} from "@/sdk/puff-smith/api/lab/liquid/endpoint";
import {BackIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, EditIcon, EditTemplate, HomeIcon, ListIcon, useParams} from "@leight-core/leight";
import {BreadcrumbButton, BreadcrumbIcon} from "@leight-core/leight/dist";

const LiquidButtonBar = () => <ButtonBar>
	<LiquidListButton/>
	<LiquidCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Edit() {
	const {liquidId} = useParams();
	return <LiquidPage
		title={"lab.liquid.edit"}
		collapsed
		menuSelection={['/lab/liquid']}
		onBack={navigate => navigate('/lab/liquid/[liquidId]', {liquidId})}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/liquid'}
				title={'lab.liquid.label'}
			/>
			<BreadcrumbButton
				href={'/lab/liquid/list'}
				title={'lab.liquid.list.label'}
			/>
			<BreadcrumbButton
				href={'/lab/liquid/[liquidId]'}
				query={{liquidId}}
				title={'lab.liquid.index.label'}
			/>
			<BreadcrumbIcon
				icon={<EditIcon/>}
				label={'lab.liquid.edit.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.liquid.button.create', '/lab/liquid/create', <CreateIcon/>)}
			{CreateMenuItem('lab.liquid.button.list', '/lab/liquid/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<LiquidButtonBar/>}
	>
		{liquid => <>
			<EditTemplate
				icon={<LiquidIcon/>}
				label={'lab.liquid'}
				extra={<>
					<ButtonBar>
						<LiquidLinkButton icon={<BackIcon/>} liquid={liquid}/>
					</ButtonBar>
					<Divider/>
				</>}
			>
				<PatchLiquidForm liquid={liquid}/>
			</EditTemplate>
			<Divider/>
		</>}
	</LiquidPage>;
});
