import {LabMenuDrawerButton, withLabLayout} from "@/puff-smith/site/lab";
import {Menu} from "antd";
import {PatchVapeForm, VapeCloneButton, VapeDrawerCreateButton} from "@/puff-smith/site/lab/vape";
import {VapePage} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, ButtonBar, EditIcon, HomeIcon, Template, useParams} from "@leight-core/leight";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {FC} from "react";

interface IVapeButtonBarProps {
	vape: VapeDto;
}

const VapeButtonBar: FC<IVapeButtonBarProps> = ({vape}) => <ButtonBar>
	<VapeCloneButton vape={vape}/>
	<VapeDrawerCreateButton type={'primary'}/>
</ButtonBar>

export default withLabLayout(function Edit() {
	const {vapeId} = useParams();
	return <VapePage
		title={"lab.vape.edit"}
		menuSelection={['/lab/vape']}
		onBack={navigate => navigate('/lab/vape', {vapeId})}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={'/lab'}
				icon={<HomeIcon/>}
			/>
			<BreadcrumbButton
				href={'/lab/vape'}
				title={'lab.vape.label'}
			/>
			<BreadcrumbButton
				href={'/lab/vape/[vapeId]'}
				query={{vapeId}}
				title={'lab.vape.index.label'}
			/>
			<BreadcrumbIcon
				icon={<EditIcon/>}
				label={'lab.vape.edit.label'}
			/>
		</Breadcrumbs>}
		extraMobile={<LabMenuDrawerButton>
			<Menu.Item>
				<VapeDrawerCreateButton type={'primary'}/>
			</Menu.Item>
		</LabMenuDrawerButton>}
		extraBrowser={({entity}) => entity && <VapeButtonBar vape={entity}/>}
	>
		{vape => <Template>
			<PatchVapeForm vape={vape}/>
		</Template>}
	</VapePage>;
});
