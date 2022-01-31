import {LabMenu, withLabLayout} from "@/puff-smith/site/lab";
import {CoilIcon} from "@/puff-smith";
import {Divider, Menu, Space} from "antd";
import {CoilCreateButton, CoilLinkButton, CoilListButton, CreateCoilForm} from "@/puff-smith/site/lab/coil";
import {CoilPage} from "@/sdk/puff-smith/api/lab/coil/endpoint";
import {BackIcon, CreateTemplate, QuickMenu} from "@leight-core/leight";

export default withLabLayout(function Clone() {
	return <CoilPage
		title={"lab.coil.clone"}
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
			<CreateTemplate
				icon={<CoilIcon/>}
				label={'lab.coil'}
				extra={<>
					<Space>
						<CoilLinkButton icon={<BackIcon/>} coil={coil} title={'lab.coil.link.button'}/>
					</Space>
					<Divider/>
				</>}
			>
				<CreateCoilForm coil={coil}/>
			</CreateTemplate>
		</>}
	</CoilPage>;
});
