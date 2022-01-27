import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {Divider, Menu} from "antd";
import {MixtureCreateButton, MixtureLink, MixtureListButton, PatchMixtureForm} from "@/puff-smith/site/lab/mixture";
import {MixturePage} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {BackIcon, EditTemplate} from "@leight-core/leight";
import {QuickMenu} from "@leight-core/leight/dist";

export default withLabLayout(function Edit() {
	return <MixturePage
		title={"lab.mixture.edit"}
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
			<EditTemplate
				icon={<MixtureIcon/>}
				label={'lab.mixture'}
				extra={<>
					<MixtureLink icon={<BackIcon/>} mixture={mixture} title={'lab.mixture.link.button'}/>
					<Divider/>
				</>}
			>
				<PatchMixtureForm mixture={mixture}/>
			</EditTemplate>
		</>}
	</MixturePage>;
});
