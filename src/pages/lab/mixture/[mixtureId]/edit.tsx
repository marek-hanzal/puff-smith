import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, EditIcon, HomeIcon, Template, useParams} from "@leight-core/common";
import {Menu} from "antd";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout";
import {LabMenuDrawerButton} from "@/puff-smith/site/lab/@module/component";
import {MixtureCreateButton} from "@/puff-smith/site/lab/mixture/@module/component/button/MixtureCreateButton";
import {PatchMixtureForm} from "@/puff-smith/site/lab/mixture/@module/form/PatchMixtureForm";

export default withLabLayout(function Edit() {
	const {mixtureId} = useParams();
	return <MixturePage
		title={"lab.mixture.edit"}
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
