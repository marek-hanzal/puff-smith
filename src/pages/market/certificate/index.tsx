import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {MarketPage} from "@/puff-smith/site/market/@module/component/MarketPage";
import {withMarketLayout} from "@/puff-smith/site/market/@module/layout/layout";
import {CertificateCreateButton} from "@/puff-smith/site/shared/certificate/@module/button/CertificateCreateButton";
import {CertificateList} from "@/puff-smith/site/shared/certificate/@module/list/CertificateList";
import {CertificateListToolbar} from "@/puff-smith/site/shared/certificate/@module/list/CertificateListToolbar";
import {UserCertificateCreateButton} from "@/puff-smith/site/shared/user/certificate/@module/button/UserCertificateCreateButton";
import {UserCertificateRequestCreateButton} from "@/puff-smith/site/shared/user/certificate/request/@module/button/UserCertificateRequestCreateButton";
import {CertificateProviderControl} from "@/sdk/api/certificate/query";
import {FireOutlined, LockOutlined, QuestionCircleTwoTone} from "@ant-design/icons";
import {BoolInline, BreadcrumbButton, BreadcrumbIcon, Breadcrumbs, SelectionProvider, TabInline} from "@leight-core/client";
import {Tabs} from "antd";
import {useTranslation} from "react-i18next";

export default withMarketLayout(function Index() {
	const {t} = useTranslation();
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
		<Tabs size={"large"}>
			<Tabs.TabPane key={"available"} tab={<TabInline icon={<FireOutlined/>} title={"market.certificate.available.tab"}/>}>
				<CertificateProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					applyFilter={{
						cost: {
							gt: 0,
						},
					}}
					defaultOrderBy={{
						name: "asc",
					}}
				>
					<SelectionProvider type={"multi"}>
						<CertificateList
							renderItemExtra={certificate => certificate.isOwned ? <BoolInline bool/> : <UserCertificateCreateButton
								certificate={certificate}
							/>}
						/>
					</SelectionProvider>
				</CertificateProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"private"} tab={<TabInline icon={<LockOutlined/>} title={"market.certificate.private.tab"}/>}>
				<CertificateProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					applyFilter={{
						cost: null,
					}}
					defaultOrderBy={{
						name: "asc",
					}}
				>
					<SelectionProvider type={"multi"}>
						<CertificateList
							renderItemExtra={certificate => {
								if (certificate.isOwned) {
									return <BoolInline bool/>;
								}
								switch (certificate.request?.status) {
									case null:
										return <BoolInline checkIcon={<QuestionCircleTwoTone/>} bool={true}/>;
									case 0:
										return <BoolInline bool={false}/>;
								}
								return <UserCertificateRequestCreateButton
									certificate={certificate}
								/>;
							}}
						/>
					</SelectionProvider>
				</CertificateProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"certificates"} tab={<TabInline icon={<CertificateIcon/>} title={"market.certificate.certificates.tab"}/>}>
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
			</Tabs.TabPane>
		</Tabs>
	</MarketPage>;
});
