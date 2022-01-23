import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {MixtureCreateButton, MixtureEditButton, MixtureListButton, MixturePreview} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {PreviewTemplate} from "@leight-core/leight/dist";
import {Space} from "antd";

export default withLabLayout(function Index() {
	return <MixturePage
		name={"lab.mixture.index"}
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
			<PreviewTemplate
				icon={<MixtureIcon/>}
				label={'lab.mixture.index'}
				extra={<MixtureEditButton mixture={mixture}/>}
				span={24}
			>
				<MixturePreview mixture={mixture}/>
			</PreviewTemplate>
		</>}
	</MixturePage>;
});
