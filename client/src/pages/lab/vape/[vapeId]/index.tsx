import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, CloneIcon, VapeIcon} from "@/puff-smith";
import {VapeCreateButton, VapeEditButton, VapeListButton, VapePreview, VapeRateButton} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, PreviewTemplate} from "@leight-core/leight";
import {Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {useSiderCollapseContext} from "@leight-core/leight/dist";

const VapeButtonBar = () => <ButtonBar>
	<VapeListButton/>
	<VapeCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	useSiderCollapseContext().useCollapse(true, true);
	return <VapePage
		title={"lab.vape.index"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape/list')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/vape'}
				title={'lab.vape.label'}
			/>
			<BreadcrumbButton
				href={'/lab/vape/list'}
				title={'lab.vape.list.label'}
			/>
			<Space size={'small'}>
				<VapeIcon/>{t('lab.vape.index.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={({entity}) => <LabMenuDrawerButton>
			{CreateMenuItem('lab.vape.button.create', '/lab/vape/create', <CreateIcon/>)}
			{entity && CreateMenuItem('lab.vape.button.clone', '/lab/vape/[vapeId]/clone', <CloneIcon/>, {vapeId: entity.id})}
			{CreateMenuItem('lab.vape.button.list', '/lab/vape/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<VapeButtonBar/>}
	>
		{vape => <>
			<PreviewTemplate
				icon={<VapeIcon/>}
				title={<AtomizerInline atomizer={vape.build.atomizer}/>}
				subTitle={vape.mixture.liquid.name}
				extra={<>
					<ButtonBar>
						<VapeEditButton vape={vape}/>
						<VapeRateButton vape={vape}/>
					</ButtonBar>
					<Divider/>
				</>}
				span={24}
			>
				<VapePreview vape={vape}/>
			</PreviewTemplate>
			<Divider/>
		</>}
	</VapePage>;
});
