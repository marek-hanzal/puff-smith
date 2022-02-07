import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {AtomizerIcon, BreadcrumbButton} from "@/puff-smith";
import {Breadcrumb, Divider, Space} from "antd";
import {AtomizerCreateButton, AtomizerLinkButton, AtomizerListButton, PatchAtomizerForm} from "@/puff-smith/site/lab/atomizer";
import {AtomizerPage} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {BackIcon, EditIcon, HomeIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";
import {ButtonBar, CreateIcon, CreateMenuItem, ListIcon, Template} from "@leight-core/leight/dist";

export default withLabLayout(function Edit() {
	const {t} = useTranslation();
	const {atomizerId} = useParams();
	return <AtomizerPage
		title={"lab.atomizer.edit"}
		menuSelection={['/lab/atomizer']}
		onBack={navigate => navigate('/lab/atomizer/[atomizerId]', {atomizerId})}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/atomizer'}
					title={'lab.atomizer.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/atomizer/list'}
					title={'lab.atomizer.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/atomizer/[atomizerId]'}
					query={{atomizerId}}
					title={'lab.atomizer.index.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<EditIcon/>{t('lab.atomizer.edit.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem('lab.atomizer.button.create', '/lab/atomizer/create', <CreateIcon/>)}
			{CreateMenuItem('lab.atomizer.button.list', '/lab/atomizer/list', <ListIcon/>)}
		</LabMenuDrawerButton> : <ButtonBar>
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
