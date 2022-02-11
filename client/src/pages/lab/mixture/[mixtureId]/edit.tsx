import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureCreateButton, PatchMixtureForm} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {Breadcrumbs, ButtonBar, EditIcon, HomeIcon, useParams} from "@leight-core/leight";
import {BreadcrumbButton, BreadcrumbIcon, Template} from "@leight-core/leight/dist";
import {Menu} from "antd";

export default withLabLayout(function Edit() {
	const {mixtureId} = useParams();
	return <MixturePage
		title={"lab.mixture.edit"}
		collapsed
		menuSelection={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture', {mixtureId})}
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
				href={'/lab/mixture/[mixtureId]'}
				query={{mixtureId}}
				title={'lab.mixture.index.label'}
			/>
			<BreadcrumbIcon
				icon={<EditIcon/>}
				label={'lab.mixture.edit.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<MixtureCreateButton type={'primary'}/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={<ButtonBar>
			<MixtureCreateButton type={'primary'}/>
		</ButtonBar>}
	>
		{mixture => <Template>
			<PatchMixtureForm mixture={mixture}/>
		</Template>}
	</MixturePage>;
});
