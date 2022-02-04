import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {CoilIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {CoilCloneButton, CoilCreateButton, CoilLinkButton, CoilListButton, PatchCoilForm} from "@/puff-smith/site/lab/coil";
import {CoilPage} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {BackIcon, ButtonLink, EditIcon, EditTemplate, HomeIcon, QuickMenu, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Edit() {
	const {t} = useTranslation();
	const {coilId} = useParams();
	return <CoilPage
		title={"lab.coil.edit"}
		selected={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil/[coilId]', {coilId})}
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
					href={'/lab/coil'}
					title={'lab.coil.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/coil/list'}
					title={'lab.coil.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/coil/[coilId]'}
					query={{coilId}}
					title={'lab.coil.index.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<EditIcon/>{t('lab.coil.edit.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<CoilCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<CoilListButton/>
			</Menu.Item>
		</QuickMenu> : <Space>
			<CoilListButton/>
			<CoilCreateButton type={'primary'}/>
		</Space>}
	>
		{coil => <>
			<LabMenu/>
			<EditTemplate
				icon={<CoilIcon/>}
				label={'lab.coil'}
				extra={<>
					<Space>
						<CoilLinkButton icon={<BackIcon/>} coil={coil}/>
						<CoilCloneButton coil={coil}/>
					</Space>
					<Divider/>
				</>}
			>
				<PatchCoilForm coil={coil}/>
			</EditTemplate>
			<Divider/>
		</>}
	</CoilPage>;
});
