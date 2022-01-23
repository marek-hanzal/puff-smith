import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {Space} from "antd";
import {MixtureCreateButton, MixtureLink, MixtureListButton} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {BackIcon, EditTemplate} from "@leight-core/leight/dist";

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
				span={24}
				extra={<MixtureLink icon={<BackIcon/>} mixture={mixture} title={'lab.mixture.link.button'}/>}
			>
				editace
			</EditTemplate>
		</>}
	</MixturePage>;
});
