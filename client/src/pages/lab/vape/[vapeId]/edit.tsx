import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, VapeIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Space} from "antd";
import {PatchVapeForm, VapeCloneButton, VapeCreateButton, VapeLinkButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BackIcon, EditIcon, EditTemplate, HomeIcon, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";
import {CreateIcon, CreateMenuItem, ListIcon} from "@leight-core/leight/dist";

export default withLabLayout(function Edit() {
	const {t} = useTranslation();
	const {vapeId} = useParams();
	return <VapePage
		title={"lab.vape.edit"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape', {vapeId})}
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
				<BreadcrumbButton
					href={'/lab/vape/[vapeId]'}
					query={{vapeId}}
					title={'lab.vape.index.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<EditIcon/>{t('lab.vape.edit.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <LabMenuDrawerButton>
			{CreateMenuItem('lab.vape.button.create', '/lab/vape/create', <CreateIcon/>)}
			{CreateMenuItem('lab.vape.button.list', '/lab/vape/list', <ListIcon/>)}
		</LabMenuDrawerButton> : <Space>
			<VapeListButton/>
			<VapeCreateButton type={'primary'}/>
		</Space>}
	>
		{vape => <>
			<EditTemplate
				icon={<VapeIcon/>}
				label={'lab.vape'}
				extra={<>
					<Space>
						<VapeLinkButton icon={<BackIcon/>} vape={vape}/>
						<VapeCloneButton vape={vape}/>
					</Space>
					<Divider/>
				</>}
			>
				<PatchVapeForm vape={vape}/>
			</EditTemplate>
			<Divider/>
		</>}
	</VapePage>;
});
