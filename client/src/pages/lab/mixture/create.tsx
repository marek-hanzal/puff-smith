import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {CreateMixtureForm, MixtureListButton} from "@/puff-smith/site/lab/mixture";
import {CreateTemplate} from "@leight-core/leight";
import {QuickMenu} from "@leight-core/leight/dist";
import {Menu} from "antd";

export default withLabLayout(function Create() {
	return <LabPage
		title={"lab.mixture.create"}
		selected={['/lab/mixture']}
		onBack={navigate => navigate('/lab/mixture')}
		extra={<QuickMenu>
			<Menu.Item>
				<MixtureListButton size={'small'}/>
			</Menu.Item>
		</QuickMenu>}
	>
		<LabMenu/>
		<CreateTemplate
			icon={<MixtureIcon/>}
			label={'lab.mixture'}
		>
			<CreateMixtureForm/>
		</CreateTemplate>
	</LabPage>;
});
