import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {AtomizerIcon, BreadcrumbButton} from "@/puff-smith";
import {Divider, Space} from "antd";
import {AtomizerCreateButton, AtomizerLinkButton, AtomizerListButton, PatchAtomizerForm} from "@/puff-smith/site/lab/atomizer";
import {AtomizerPage} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {BackIcon, ButtonBar, CreateIcon, CreateMenuItem, EditIcon, HomeIcon, ListIcon, Template, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {Breadcrumbs} from "@leight-core/leight/dist";

export default withLabLayout(function Edit() {
	const {t} = useTranslation();
	const {atomizerId} = useParams();
	return <AtomizerPage
		title={"lab.atomizer.edit"}
		menuSelection={['/lab/atomizer']}
		onBack={navigate => navigate('/lab/atomizer/[atomizerId]', {atomizerId})}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/atomizer'}
				title={'lab.atomizer.label'}
			/>
			<BreadcrumbButton
				href={'/lab/atomizer/list'}
				title={'lab.atomizer.list.label'}
			/>
			<BreadcrumbButton
				href={'/lab/atomizer/[atomizerId]'}
				query={{atomizerId}}
				title={'lab.atomizer.index.label'}
			/>
			<Space size={'small'}>
				<EditIcon/>{t('lab.atomizer.edit.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.atomizer.button.create', '/lab/atomizer/create', <CreateIcon/>)}
			{CreateMenuItem('lab.atomizer.button.list', '/lab/atomizer/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<AtomizerListButton/>
			<AtomizerCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{atomizer => <>
			<Template
				icon={<AtomizerIcon/>}
				title={atomizer.name}
				subTitle={atomizer.vendor.name}
				extra={<>
					<Space>
						<AtomizerLinkButton icon={<BackIcon/>} atomizer={atomizer}/>
					</Space>
					<Divider/>
				</>}
			>
				<PatchAtomizerForm atomizer={atomizer}/>
			</Template>
			<Divider/>
		</>}
	</AtomizerPage>;
});
