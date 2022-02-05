import {withLabLayout} from "@/puff-smith/site/lab";
import {CloneIcon, VapeIcon} from "@/puff-smith";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {CreateVapeForm, VapeCreateButton, VapeLinkButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BackIcon, ButtonLink, CreateTemplate, HomeIcon, QuickMenu, useParams} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Clone() {
	const {t} = useTranslation();
	const {vapeId} = useParams();
	return <VapePage
		title={"lab.vape.clone"}
		selected={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape', {vapeId})}
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
					href={'/lab/vape'}
					title={'lab.vape.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/vape/list'}
					title={'lab.vape.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<ButtonLink
					style={{padding: 0}}
					type={'link'}
					size={'small'}
					href={'/lab/vape/[vapeId]'}
					query={{vapeId}}
					title={'lab.vape.index.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<CloneIcon/>{t('lab.vape.clone.label')}
				</Space>
			</Breadcrumb.Item>
		</Breadcrumb>}
		extra={isMobile ? <QuickMenu>
			<Menu.Item>
				<VapeCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<VapeListButton/>
			</Menu.Item>
		</QuickMenu> : <Space>
			<VapeListButton/>
			<VapeCreateButton type={'primary'}/>
		</Space>}
	>
		{vape => <>
			<CreateTemplate
				icon={<VapeIcon/>}
				label={'lab.vape'}
				extra={<>
					<Space>
						<VapeLinkButton icon={<BackIcon/>} vape={vape} title={'lab.vape.link.button'}/>
					</Space>
					<Divider/>
				</>}
			>
				<CreateVapeForm vape={vape}/>
			</CreateTemplate>
			<Divider/>
		</>}
	</VapePage>;
});
