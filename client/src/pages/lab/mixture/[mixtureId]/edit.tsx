import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {Space} from "antd";
import {MixtureCreateButton, MixtureLink, MixtureListButton, PatchMixtureForm} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {BackIcon, EditTemplate} from "@leight-core/leight";

export default withLabLayout(function Edit() {
	return <MixturePage
		name={"lab.mixture.edit"}
		selected={['/lab/mixture']}
		card={{
			extra: <Space>
				<MixtureListButton/>
				<MixtureCreateButton type={'link'}/>
			</Space>
		}}
	>
		{mixture => <>
			<LabMenu/>
			<EditTemplate
				icon={<MixtureIcon/>}
				label={'lab.mixture'}
				extra={<MixtureLink icon={<BackIcon/>} mixture={mixture} title={'lab.mixture.link.button'}/>}
			>
				<PatchMixtureForm mixture={mixture}/>
			</EditTemplate>
		</>}
	</MixturePage>;
});
