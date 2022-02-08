import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, CoilIcon} from "@/puff-smith";
import {CoilCloneButton, CoilCreateButton, CoilEditButton, CoilListButton, CoilPreview} from "@/puff-smith/site/lab/coil";
import {CoilPage} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {Breadcrumbs, ButtonBar, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, PreviewTemplate} from "@leight-core/leight";
import {Divider, Space} from "antd";
import {useTranslation} from "react-i18next";

const CoilButtonBar = () => <ButtonBar>
	<CoilListButton/>
	<CoilCreateButton type={'primary'}/>
</ButtonBar>;

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	return <CoilPage
		title={"lab.coil.index"}
		menuSelection={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil/list')}
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
			<Space size={'small'}>
				<CoilIcon/>{t('lab.coil.index.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			{CreateMenuItem('lab.coil.button.create', '/lab/coil/create', <CreateIcon/>)}
			{CreateMenuItem('lab.coil.button.list', '/lab/coil/list', <ListIcon/>)}
		</LabMenuDrawerButton>}
		extraBrowser={<CoilButtonBar/>}
	>
		{coil => <>
			<PreviewTemplate
				icon={<CoilIcon/>}
				title={coil.wire.name}
				subTitle={coil.wire.vendor.name}
				extra={<>
					<ButtonBar>
						<CoilEditButton coil={coil}/>
						<CoilCloneButton coil={coil}/>
					</ButtonBar>
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
