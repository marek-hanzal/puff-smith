import {LabMenu, LabPage, withLabLayout} from "@/puff-smith/site/lab";
import {VapeIcon} from "@/puff-smith";
import {Divider, Space} from "antd";
import {VapeCreateButton, VapeListButton} from "@/puff-smith/site/lab/vape";
import {Template} from "@leight-core/leight";

export default withLabLayout(function Index() {
	return <LabPage
		name={"lab.vape"}
		selected={['/lab/vape']}
	>
		<LabMenu/>
		<Template
			icon={<VapeIcon/>}
			label={'lab.vape'}
			extra={
				<>
					<Space split={<Divider type={'vertical'}/>}>
						<VapeCreateButton/>
						<VapeListButton size={'middle'}/>
					</Space>
					<Divider/>
				</>
			}
			span={24}
		/>
	</LabPage>;
});
