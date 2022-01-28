import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {MixtureCreateButton, MixtureEditButton, MixtureListButton, MixturePreview} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {PreviewTemplate} from "@leight-core/leight";
import {Divider, Menu} from "antd";
import {QuickMenu} from "@leight-core/leight";

export default withLabLayout(function Index() {
	return <MixturePage
		title={"lab.mixture.index"}
		selected={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture')}
		extra={<QuickMenu>
			<Menu.Item>
				<MixtureCreateButton size={'small'}/>
			</Menu.Item>
			<Menu.Item>
				<MixtureListButton size={'small'}/>
			</Menu.Item>
		</QuickMenu>}
	>
		{mixture => <>
			<LabMenu/>
			<PreviewTemplate
				icon={<MixtureIcon/>}
				label={'lab.mixture.index'}
				extra={<>
					<MixtureEditButton mixture={mixture}/>
					<Divider/>
				</>}
				span={24}
			>
				<MixturePreview mixture={mixture}/>
			</PreviewTemplate>
		</>}
	</MixturePage>;
});
