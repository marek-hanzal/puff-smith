import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, CloneIcon, VapeIcon} from "@/puff-smith";
import {VapeCreateButton, VapeEditButton, VapeListButton, VapePreview, VapeRateButton} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {HomeIcon, PreviewTemplate} from "@leight-core/leight";
import {Breadcrumb, Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {isMobile} from "react-device-detect";
import {ButtonBar, CreateIcon, CreateMenuItem, ListIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <VapePage
		title={"lab.vape.index"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape/list')}
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
				<BreadcrumbButton
					href={'/lab/vape/list'}
					title={'lab.vape.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<VapeIcon/>{t('lab.vape.index.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={({entity}) => isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem('lab.vape.button.create', '/lab/vape/create', <CreateIcon/>)}
			{entity && CreateMenuItem('lab.vape.button.clone', '/lab/vape/[vapeId]/clone', <CloneIcon/>, {vapeId: entity.id})}
			{CreateMenuItem('lab.vape.button.list', '/lab/vape/list', <ListIcon/>)}
		</LabMenuDrawerButton> : <ButtonBar>
			<VapeListButton/>
			<VapeCreateButton type={'primary'}/>
		</ButtonBar>}
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
