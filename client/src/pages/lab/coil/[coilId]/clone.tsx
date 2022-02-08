import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, CloneIcon} from "@/puff-smith";
import {Divider, Space} from "antd";
import {CoilCreateButton, CoilLinkButton, CoilListButton, CreateCoilForm} from "@/puff-smith/site/lab/coil";
import {CoilPage} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {BackIcon, ButtonBar, CreateIcon, CreateMenuItem, CreateTemplate, HomeIcon, ListIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {Breadcrumbs} from "@leight-core/leight/dist";

export default withLabLayout(function Clone() {
	const {t} = useTranslation();
	const {coilId} = useParams();
	return <CoilPage
		title={"lab.coil.clone"}
		menuSelection={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil/[coilId]', {coilId})}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/coil'}
				title={'lab.coil.label'}
			/>
			<BreadcrumbButton
				href={'/lab/coil/list'}
				title={'lab.coil.list.label'}
			/>
			<BreadcrumbButton
				href={'/lab/coil/[coilId]'}
				query={{coilId}}
				title={'lab.coil.index.label'}
			/>
			<Space size={'small'}>
				<CloneIcon/>{t('lab.coil.clone.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.coil.button.create', '/lab/coil/create', <CreateIcon/>)}
			{CreateMenuItem('lab.coil.button.list', '/lab/coil/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<CoilListButton/>
			<CoilCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{coil => <>
			<CreateTemplate
				extra={<>
					<ButtonBar>
						<CoilLinkButton icon={<BackIcon/>} coil={coil} title={'lab.coil.link.button'}/>
					</ButtonBar>
					<Divider/>
				</>}
			>
				<CreateCoilForm coil={coil}/>
			</CreateTemplate>
			<Divider/>
		</>}
	</CoilPage>;
});
