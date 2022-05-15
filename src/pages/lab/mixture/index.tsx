import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {MixtureFilter} from "@/puff-smith/site/lab/mixture/@module/filter/MixtureFilter";
import {MixtureList} from "@/puff-smith/site/lab/mixture/@module/list/MixtureList";
import {MixtureUserJobButton} from "@/puff-smith/site/shared/mixture/@module/button/MixtureUserJobButton";
import {MixtureSourceControlProvider} from "@/sdk/api/mixture/inventory/mixture/query";
import {PushRight} from "@leight-core/client";
import {Col, Divider, Row, Space} from "antd";

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.mixture.index"}
		menuSelection={["/lab/mixture"]}
		icon={<MixtureIcon/>}
	>
		<MixtureSourceControlProvider
			defaultSize={10}
			defaultOrderBy={[
				{aroma: {name: "asc"}},
				{mixture: {vg: "desc"}},
				{mixture: {nicotine: "asc"}},
			] as any}
		>
			<MixtureList
				header={() => <>
					<Row align={"middle"}>
						<Col span={12}>
							<Space split={<Divider type={"vertical"}/>}>
								<MixtureFilter/>
							</Space>
						</Col>
						<Col span={12}>
							<PushRight>
								<MixtureUserJobButton/>
							</PushRight>
						</Col>
					</Row>
				</>}
			/>
		</MixtureSourceControlProvider>
	</LabPage>;
});
