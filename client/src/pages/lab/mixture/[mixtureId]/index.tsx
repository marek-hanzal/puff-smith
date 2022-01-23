import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {Divider, Space} from "antd";
import {MixtureCreateButton, MixtureListButton, MixturePreview} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {PreviewTemplate} from "@leight-core/leight/dist";

export default withLabLayout(function Index() {
	return <MixturePage
		name={"lab.mixture.index"}
		selected={['/lab/mixture']}
	>
		{mixture => <>
			<LabMenu/>
			<PreviewTemplate
				icon={<MixtureIcon/>}
				label={'lab.mixture.index'}
				extra={
					<>
						<Space split={<Divider type={'vertical'}/>}>
							<MixtureCreateButton/>
							<MixtureListButton size={'middle'}/>
						</Space>
						<Divider/>
					</>
				}
				span={24}
			>
				<MixturePreview mixture={mixture}/>
			</PreviewTemplate>
		</>}
	</MixturePage>;
});
