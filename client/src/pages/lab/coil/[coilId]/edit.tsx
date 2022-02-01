import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {CoilIcon} from "@/puff-smith";
import {Divider, Menu, Space} from "antd";
import {CoilCloneButton, CoilCreateButton, CoilLinkButton, CoilListButton, PatchCoilForm} from "@/puff-smith/site/lab/coil";
import {CoilPage} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {BackIcon, EditTemplate, QuickMenu} from "@leight-core/leight";

export default withLabLayout(function Edit() {
	return <CoilPage
		title={"lab.coil.edit"}
		selected={['/lab/coil']}
		onBack={navigate => navigate('/lab/coil')}
		extra={<QuickMenu>
			<Menu.Item>
				<CoilCreateButton/>
			</Menu.Item>
			<Menu.Item>
				<CoilListButton/>
			</Menu.Item>
		</QuickMenu>}
	>
		{coil => <>
			<LabMenu/>
			<EditTemplate
				icon={<CoilIcon/>}
				label={'lab.coil'}
				extra={<>
					<Space>
						<CoilLinkButton icon={<BackIcon/>} coil={coil}/>
						<CoilCloneButton coil={coil}/>
					</Space>
					<Divider/>
				</>}
			>
				<PatchCoilForm coil={coil}/>
			</EditTemplate>
			<Divider/>
		</>}
	</CoilPage>;
});
