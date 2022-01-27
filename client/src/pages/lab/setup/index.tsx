import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {SetupIcon} from "@/puff-smith";
import {BackIcon, ButtonBar, ButtonLink, PageHeader, QuickMenu, Template} from "@leight-core/leight";
import {SetupCreateButton, SetupListButton} from "@/puff-smith/site/lab/setup";
import {Menu} from "antd";

export default withLabLayout(function Index() {
	return <LabPage
		name={"lab.setup"}
		selected={['/lab/setup']}
		card={{
			title: <PageHeader
				title={'lab.setup'}
				left={<ButtonLink type={'link'} href={'/lab'} icon={<BackIcon/>}/>}
				right={<QuickMenu>
					<Menu.Item>
						Some item 1
					</Menu.Item>
					<Menu.Item>
						Some item 2
					</Menu.Item>
					<Menu.Item>
						Some item 3
					</Menu.Item>
				</QuickMenu>}
			/>,
		}}
	>
		<LabMenu/>
		<Template
			icon={<SetupIcon/>}
			label={'lab.setup'}
			span={24}
			isMobile
		>
			<ButtonBar>
				<SetupCreateButton/>
				<SetupListButton size={'middle'}/>
			</ButtonBar>
		</Template>
	</LabPage>;
});
