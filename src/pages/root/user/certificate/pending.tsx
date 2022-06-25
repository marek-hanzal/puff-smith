import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {RootPage} from "@/puff-smith/site/root/@module/component/RootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {UserMenu} from "@/puff-smith/site/root/user/@module/menu/UserMenu";
import {CertificateApproveButton} from "@/puff-smith/site/shared/user/certificate/request/@module/button/CertificateApproveButton";
import {CertificateDeclineButton} from "@/puff-smith/site/shared/user/certificate/request/@module/button/CertificateDeclineButton";
import {CertificateRequestList} from "@/puff-smith/site/shared/user/certificate/request/@module/list/CertificateRequestList";
import {CertificateRequestListToolbar} from "@/puff-smith/site/shared/user/certificate/request/@module/list/CertificateRequestListToolbar";
import {UserCertificateRequestProviderControl} from "@/sdk/api/user/certificate/request/query";
import {ButtonBar, SelectionProvider} from "@leight-core/client";

export default withRootLayout(function Pending() {
	return <RootPage
		onBack={navigate => navigate("/root/user")}
		title={"root.user.certificate.pending"}
		menuSelection={["/root/user/certificate/pending"]}
		icon={<CertificateIcon/>}
		headerProps={{
			footer: <UserMenu/>,
		}}
	>
		<UserCertificateRequestProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			applyFilter={{
				status: null,
			}}
		>
			<SelectionProvider type={"multi"}>
				<CertificateRequestList
					header={() => <RowInline
						extra={<CertificateRequestListToolbar/>}
					/>}
					renderItemExtra={userCertificateRequest => <ButtonBar>
						<CertificateApproveButton userCertificateRequest={userCertificateRequest}/>
						<CertificateDeclineButton userCertificateRequest={userCertificateRequest}/>
					</ButtonBar>}
				/>
			</SelectionProvider>
		</UserCertificateRequestProviderControl>
	</RootPage>;
});
