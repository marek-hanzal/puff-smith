import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {MixtureIcon} from "@/puff-smith";
import {Divider, Space} from "antd";
import {MixtureCreateButton, MixtureListButton} from "@/puff-smith/site/lab/mixture";
import {Template} from "@leight-core/leight";

export default withLabLayout(function Index() {
	return <LabPage
		name={"lab.mixture"}
		selected={['/lab/mixture']}
	>
		<LabMenu/>
		<Template
			icon={<MixtureIcon/>}
			label={'lab.mixture'}
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
		/>
	</LabPage>;
});
