import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, CloneIcon, VapeIcon} from "@/puff-smith";
import {Divider, Space} from "antd";
import {CreateVapeForm, VapeCreateButton, VapeLinkButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BackIcon, Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, CreateTemplate, HomeIcon, ListIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";

const VapeButtonBar = () => <ButtonBar>
	<VapeListButton/>
	<VapeCreateButton type={'primary'}/>
</ButtonBar>

export default withLabLayout(function Clone() {
	const {t} = useTranslation();
	const {vapeId} = useParams();
	return <VapePage
		title={"lab.vape.clone"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape', {vapeId})}
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
			<BreadcrumbButton
				href={'/lab/vape/[vapeId]'}
				query={{vapeId}}
				title={'lab.vape.index.label'}
			/>
			<Space size={'small'}>
				<CloneIcon/>{t('lab.vape.clone.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.vape.button.create', '/lab/vape/create', <CreateIcon/>)}
			{CreateMenuItem('lab.vape.button.list', '/lab/vape/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<VapeButtonBar/>}
	>
		{vape => <>
			<CreateTemplate
				icon={<VapeIcon/>}
				label={'lab.vape'}
				extra={<>
					<ButtonBar>
						<VapeLinkButton icon={<BackIcon/>} vape={vape} title={'lab.vape.link.button'}/>
					</ButtonBar>
					<Divider/>
				</>}
			>
				<CreateVapeForm vape={vape}/>
			</CreateTemplate>
			<Divider/>
		</>}
	</VapePage>;
});
