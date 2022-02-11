import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon, PlotIcon} from "@/puff-smith";
import {MixtureCreateButton, MixturePlotButton, MixturePreview} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, CreateMenuItem, HomeIcon} from "@leight-core/leight";
import {Menu, Space} from "antd";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {FC} from "react";

interface IMixtureButtonBarProps {
	mixture: MixtureDto;
}

const MixtureButtonBar: FC<IMixtureButtonBarProps> = ({mixture}) => <Space>
	<MixturePlotButton mixture={mixture}/>
	<MixtureCreateButton type={'primary'}/>
</Space>;

export default withLabLayout(function Index() {
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
			<BreadcrumbIcon
				icon={<MixtureIcon/>}
				label={'lab.mixture.index.label'}
			/>
		</Breadcrumbs>}
		extraMobile={({entity}) => entity && <LabMenuDrawerButton>
			<Menu.Item>
				<MixtureCreateButton/>
			</Menu.Item>
			{CreateMenuItem('lab.mixture.button.plot', '/lab/mixture/[mixtureId]/plot', <PlotIcon/>, {mixtureId: entity.id})}
		</LabMenuDrawerButton>}
		extraBrowser={({entity}) => entity && <MixtureButtonBar mixture={entity}/>}
	>
		{mixture => <MixturePreview mixture={mixture}/>}
	</MixturePage>;
});
