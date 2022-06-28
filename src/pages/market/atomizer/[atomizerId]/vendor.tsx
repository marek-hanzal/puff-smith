import {AtomizerIcon} from "@/puff-smith/component/icon/AtomizerIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {VendorIcon} from "@/puff-smith/component/icon/VendorIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {AtomizerSource} from "@/puff-smith/service/atomizer/AtomizerSource";
import {IAtomizerFetch} from "@/puff-smith/service/atomizer/interface";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {AtomizerFilter} from "@/puff-smith/site/market/atomizer/@module/filter/AtomizerFilter";
import {AtomizerList} from "@/puff-smith/site/market/atomizer/@module/list/AtomizerList";
import {AtomizerListToolbar} from "@/puff-smith/site/market/atomizer/@module/list/AtomizerListToolbar";
import {AtomizerIndexMenu} from "@/puff-smith/site/market/atomizer/@module/menu/AtomizerIndexMenu";
import {AtomizerCreateButton} from "@/puff-smith/site/shared/atomizer/@module/button/AtomizerCreateButton";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {AtomizerProviderControl} from "@/sdk/api/atomizer/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, SelectionProvider, Template} from "@leight-core/client";

export default withMarketLayout(function Vendor({atomizer}: IAtomizerFetch) {
	return <MarketPage
		title={"market.atomizer.vendor"}
		menuSelection={["/market/atomizer", "/market/atomizer/[atomizerId]/vendor"]}
		icon={<VendorIcon/>}
		extra={<AtomizerCreateButton/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/market"}
				icon={<LabIcon/>}
			/>
			<BreadcrumbButton
				href={"/market/atomizer"}
				label={"market.atomizer.label"}
			/>
			<BreadcrumbButton
				href={"/market/atomizer/[atomizerId]"}
				query={{atomizerId: atomizer.id}}
				label={<AtomizerNameInline atomizer={atomizer}/>}
			/>
			<BreadcrumbIcon
				icon={<VendorIcon/>}
				label={"market.atomizer.vendor.label"}
			/>
		</Breadcrumbs>}
		footer={<AtomizerIndexMenu atomizer={atomizer}/>}
	>
		<AtomizerProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			applyFilter={{
				vendorId: atomizer.vendorId,
				NOT: {
					id: atomizer.id,
				}
			}}
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<SelectionProvider type={"multi"}>
				<AtomizerList
					header={() => <RowInline
						extra={<AtomizerListToolbar/>}
					>
						<AtomizerFilter exclude={["vendorId"]}/>
					</RowInline>}
					locale={{
						emptyText: <Template
							icon={<AtomizerIcon/>}
							label={"market.atomizer.vendor.list.empty"}
						/>,
					}}
				/>
			</SelectionProvider>
		</AtomizerProviderControl>
	</MarketPage>;
});

export const getServerSideProps = AtomizerSource().withFetch("atomizer", "atomizerId");
