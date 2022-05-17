import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {MixtureFilter} from "@/puff-smith/site/lab/mixture/@module/filter/MixtureFilter";
import {MixtureList} from "@/puff-smith/site/lab/mixture/@module/list/MixtureList";
import {MixtureUserJobButton} from "@/puff-smith/site/shared/mixture/@module/button/MixtureUserJobButton";
import {MixtureSourceControlProvider} from "@/sdk/api/mixture/inventory/mixture/query";
import {PushRight, Template, useFilterContext} from "@leight-core/client";
import {Col, Divider, Row, Space} from "antd";
import {FC} from "react";

interface IInternalListProps {
}

const InternalList: FC<IInternalListProps> = () => {
	const filterContext = useFilterContext();
	return filterContext.isEmpty() ?
		<Template
			style={{marginTop: "0em"}}
			icon={<MixtureIcon/>}
			label={"market.aroma.mixture.filter"}
			span={12}
			extra={<MixtureUserJobButton/>}
		>
			<MixtureFilter
				inline
			/>
		</Template> :
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
		/>;
};

export default withLabLayout(function Index() {
	return <LabPage
		title={"lab.mixture.index"}
		menuSelection={["/lab/mixture"]}
		icon={<MixtureIcon/>}
	>
		<MixtureSourceControlProvider
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={[
				{aroma: {name: "asc"}},
				{mixture: {vg: "desc"}},
				{mixture: {nicotine: "asc"}},
			] as any}
		>
			<InternalList/>
		</MixtureSourceControlProvider>
	</LabPage>;
});
