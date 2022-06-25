import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {RootPage} from "@/puff-smith/site/root/@module/component/RootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {UserMenu} from "@/puff-smith/site/root/user/@module/menu/UserMenu";
import {LicenseApproveButton} from "@/puff-smith/site/shared/user/license/request/@module/button/LicenseApproveButton";
import {LicenseDeclineButton} from "@/puff-smith/site/shared/user/license/request/@module/button/LicenseDeclineButton";
import {LicenseRequestList} from "@/puff-smith/site/shared/user/license/request/@module/list/LicenseRequestList";
import {LicenseRequestListToolbar} from "@/puff-smith/site/shared/user/license/request/@module/list/LicenseRequestListToolbar";
import {UserLicenseRequestProviderControl} from "@/sdk/api/user/license/request/query";
import {ButtonBar, SelectionProvider} from "@leight-core/client";

export default withRootLayout(function Pending() {
	return <RootPage
		onBack={navigate => navigate("/root/user")}
		title={"root.user.license.pending"}
		menuSelection={["/root/user/license/pending"]}
		icon={<LicenseIcon/>}
		headerProps={{
			footer: <UserMenu/>,
		}}
	>
		<UserLicenseRequestProviderControl
			defaultSize={DEFAULT_LIST_SIZE}
			applyFilter={{
				status: null,
			}}
		>
			<SelectionProvider type={"multi"}>
				<LicenseRequestList
					header={() => <RowInline
						extra={<LicenseRequestListToolbar/>}
					/>}
					renderItemExtra={userLicenseRequest => <ButtonBar>
						<LicenseApproveButton userLicenseRequest={userLicenseRequest}/>
						<LicenseDeclineButton userLicenseRequest={userLicenseRequest}/>
					</ButtonBar>}
				/>
			</SelectionProvider>
		</UserLicenseRequestProviderControl>
	</RootPage>;
});
