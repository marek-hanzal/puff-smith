import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {CertificateCreateButton} from "@/puff-smith/site/shared/certificate/@module/button/CertificateCreateButton";
import {CertificateList} from "@/puff-smith/site/shared/certificate/@module/list/CertificateList";
import {CertificateListToolbar} from "@/puff-smith/site/shared/certificate/@module/list/CertificateListToolbar";
import {CertificateProviderControl} from "@/sdk/api/certificate/query";
import {BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, SelectionProvider} from "@leight-core/client";

export default withMarketLayout(function Index() {
	return <MarketPage
		title={"market.certificate.index"}
		menuSelection={["/market/certificate"]}
		icon={<CertificateIcon/>}
		extra={<CertificateCreateButton/>}
		breadcrumbProps={<Breadcrumbs>
			<BreadcrumbButton
				href={"/market"}
				icon={<MarketIcon/>}
			/>
			<BreadcrumbIcon
				icon={<CertificateIcon/>}
				label={"market.certificate.label"}
			/>
		</Breadcrumbs>}
		withHelp={{
			translation: "market.certificate.index",
		}}
	>
		<CertificateProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			defaultOrderBy={{
				name: "asc",
			}}
		>
			<SelectionProvider type={"multi"}>
				<CertificateList
					header={() => <RowInline
						extra={<CertificateListToolbar/>}
					/>}
				/>
			</SelectionProvider>
		</CertificateProviderControl>
	</MarketPage>;
});
