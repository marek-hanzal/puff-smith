import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {TransComponents} from "@/puff-smith/component/Trans";
import {BuildSource} from "@/puff-smith/service/build/BuildSource";
import {IBuildFetch} from "@/puff-smith/service/build/interface";
import {CellInventoryList} from "@/puff-smith/site/inventory/cell/@module/list/CellInventoryList";
import {LabPage} from "@/puff-smith/site/lab/@module/component/LabPage";
import {withLabLayout} from "@/puff-smith/site/lab/@module/layout/layout";
import {BuildNameInline} from "@/puff-smith/site/lab/build/@module/inline/BuildNameInline";
import {BuildIndexMenu} from "@/puff-smith/site/lab/build/@module/menu/BuildIndexMenu";
import {CellInventoryProviderControl} from "@/sdk/api/inventory/cell/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, Template} from "@leight-core/client";

export default withLabLayout(function Cells({build}: IBuildFetch) {
	return <LabPage
		title={"lab.build.cells"}
		values={{build}}
		components={TransComponents}
		onBack={navigate => navigate("/lab/build")}
		menuSelection={["/lab/build", "/lab/build/[buildId]/cells"]}
		icon={<CellIcon/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/lab"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/lab/build"}
				label={"lab.build.label"}
			/>
			<BreadcrumbButton
				href={"/lab/build/[buildId]"}
				query={{
					buildId: build.id,
				}}
				label={<BuildNameInline build={build}/>}
			/>
			<BreadcrumbIcon
				icon={<CellIcon/>}
				label={"lab.build.cells.title"}
			/>
		</Breadcrumbs>}
		footer={<BuildIndexMenu build={build}/>}
	>
		<CellInventoryProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				rating: "desc",
			}}
			applyFilter={{
				cell: {
					ohm: {
						lte: build.ohm,
					}
				}
			}}
		>
			<CellInventoryList
				emptyText={<Template
					status={"error"}
					icon={<CellIcon/>}
					label={"lab.build.cell.list.empty"}
				/>}
			/>
		</CellInventoryProviderControl>
	</LabPage>;
});

export const getServerSideProps = BuildSource().withFetch("build", "buildId");
