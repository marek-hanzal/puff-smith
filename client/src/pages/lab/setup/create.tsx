import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {SetupIcon} from "@/puff-smith";
import {CreateSetupForm, SetupListButton} from "@/puff-smith/site/lab/setup";
import {BackIcon, ButtonLink, CreateTemplate, PageHeader, QuickMenu} from "@leight-core/leight";
import {Menu} from "antd";

export default withLabLayout(function Create() {
	return <LabPage
		name={"lab.setup.create"}
		selected={['/lab/setup']}
		card={{
			title: <PageHeader
				title={'lab.setup.create'}
				left={<ButtonLink type={'link'} href={'/lab/setup'} icon={<BackIcon/>}/>}
				right={<QuickMenu>
					<Menu.Item>
						<SetupListButton size={'small'}/>
					</Menu.Item>
				</QuickMenu>}
			/>,
		}}
	>
		<LabMenu/>
		<CreateTemplate
			icon={<SetupIcon/>}
			label={'lab.setup'}
		>
			<CreateSetupForm/>
		</CreateTemplate>
	</LabPage>;
});
