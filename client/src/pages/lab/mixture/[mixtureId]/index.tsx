import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {BreadcrumbButton, MixtureIcon, PlotIcon} from "@/puff-smith";
import {MixtureCreateButton, MixtureEditButton, MixtureInline, MixtureListButton, MixturePlotButton, MixturePreview} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {Breadcrumbs, CreateIcon, CreateMenuItem, HomeIcon, ListIcon, PreviewTemplate} from "@leight-core/leight";
import {Divider, Space} from "antd";
import {useTranslation} from "react-i18next";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {FC} from "react";
import {useSiderCollapseContext} from "@leight-core/leight/dist";

interface IMixtureButtonBarProps {
	mixture?: MixtureDto;
}

const MixtureButtonBar: FC<IMixtureButtonBarProps> = ({mixture}) => <Space>
	{mixture && <MixturePlotButton mixture={mixture}/>}
	<MixtureListButton/>
	<MixtureCreateButton type={'primary'}/>
</Space>;

export default withLabLayout(function Index() {
	const {t} = useTranslation();
	useSiderCollapseContext().useCollapse(true, true);
	return <MixturePage
		title={"lab.mixture.index"}
		menuSelection={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture/list')}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/mixture'}
				title={'lab.mixture.label'}
			/>
			<BreadcrumbButton
				href={'/lab/mixture/list'}
				title={'lab.mixture.list.label'}
			/>
			<Space size={'small'}>
				<MixtureIcon/>{t('lab.mixture.index.label')}
			</Space>
		</Breadcrumbs>}
		extraMobile={({entity}) => <LabMenuDrawerButton>
			{CreateMenuItem('lab.mixture.button.create', '/lab/mixture/create', <CreateIcon/>)}
			{CreateMenuItem('lab.mixture.button.list', '/lab/mixture/list', <ListIcon/>)}
			{entity && CreateMenuItem('lab.mixture.button.plot', '/lab/mixture/[mixtureId]/plot', <PlotIcon/>, {mixtureId: entity.id})}
		</LabMenuDrawerButton>}
		extraBrowser={({entity}) => <MixtureButtonBar mixture={entity}/>}
	>
		{mixture => <>
			<PreviewTemplate
				icon={<MixtureIcon/>}
				title={<MixtureInline mixture={mixture}/>}
				extra={<>
					<MixtureEditButton mixture={mixture}/>
					<Divider/>
				</>}
				span={24}
			>
				<MixturePreview mixture={mixture}/>
			</PreviewTemplate>
			<Divider/>
		</>}
	</MixturePage>;
});
