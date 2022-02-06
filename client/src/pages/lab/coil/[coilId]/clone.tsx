import {withLabLayout} from "@/puff-smith/site/lab";
import {CloneIcon, CoilIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {CoilCreateButton, CoilLinkButton, CoilListButton, CreateCoilForm} from "@/puff-smith/site/lab/coil";
import {CoilPage} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {BackIcon, ButtonLink, CreateTemplate, HomeIcon, QuickMenu, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Clone() {
	const {t} = useTranslation();
	const {coilId} = useParams();
	return <CoilPage
		title={"lab.coil.clone"}
		menuSelection={['/lab/coil']}
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
					<CloneIcon/>{t('lab.coil.clone.label')}
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
			<CreateTemplate
				icon={<CoilIcon/>}
				label={'lab.coil'}
				extra={<>
					<Space>
						<CoilLinkButton icon={<BackIcon/>} coil={coil} title={'lab.coil.link.button'}/>
					</Space>
					<Divider/>
				</>}
			>
				<CreateCoilForm coil={coil}/>
			</CreateTemplate>
			<Divider/>
		</>}
	</CoilPage>;
});
