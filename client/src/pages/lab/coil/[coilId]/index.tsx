import {withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, CoilIcon} from "@/puff-smith";
import {CoilCloneButton, CoilCreateButton, CoilEditButton, CoilListButton, CoilPreview} from "@/puff-smith/site/lab/coil";
import {CoilPage} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {HomeIcon, PreviewTemplate, QuickMenu} from "@leight-core/leight";
import {Breadcrumb, Divider, Menu, Space} from "antd";
import {useTranslation} from "react-i18next";
import {isMobile} from "react-device-detect";

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <CoilPage
		title={"lab.coil.index"}
		menuSelection={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil/list')}
		breadcrumbProps={<Breadcrumb>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab'}
					icon={<HomeIcon/>}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/coil'}
					title={'lab.coil.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<BreadcrumbButton
					href={'/lab/coil/list'}
					title={'lab.coil.list.label'}
				/>
			</Breadcrumb.Item>
			<Breadcrumb.Item>
				<Space size={'small'}>
					<CoilIcon/>{t('lab.coil.index.label')}
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
			<PreviewTemplate
				icon={<CoilIcon/>}
				label={'lab.coil.index'}
				extra={<>
					<Space>
						<CoilEditButton coil={coil}/>
						<CoilCloneButton coil={coil}/>
					</Space>
					<Divider/>
				</>}
				span={24}
			>
				<CoilPreview coil={coil}/>
			</PreviewTemplate>
			<Divider/>
		</>}
	</CoilPage>;
});
