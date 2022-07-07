import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {IUserFetch} from "@/puff-smith/service/user/interface";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {BrowserRootPage} from "@/puff-smith/site/root/@module/component/BrowserRootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {UserIndexMenu} from "@/puff-smith/site/root/user/@module/menu/UserIndexMenu";
import {UserLicenseList} from "@/puff-smith/site/shared/user/license/@module/list/UserLicenseList";
import {UserLicenseListToolbar} from "@/puff-smith/site/shared/user/license/@module/list/UserLicenseListToolbar";
import {LicenseApproveButton} from "@/puff-smith/site/shared/user/license/request/@module/button/LicenseApproveButton";
import {LicenseDeclineButton} from "@/puff-smith/site/shared/user/license/request/@module/button/LicenseDeclineButton";
import {LicenseRequestList} from "@/puff-smith/site/shared/user/license/request/@module/list/LicenseRequestList";
import {LicenseRequestListToolbar} from "@/puff-smith/site/shared/user/license/request/@module/list/LicenseRequestListToolbar";
import {UserLicenseProviderControl} from "@/sdk/api/user/license/query";
import {UserLicenseRequestProviderControl} from "@/sdk/api/user/license/request/query";
import {CheckCircleOutlined, CloseCircleOutlined, QuestionCircleOutlined} from "@ant-design/icons";
import {ButtonBar, SelectionProvider, TabInline} from "@leight-core/client";
import {Avatar, Tabs} from "antd";

export default withRootLayout(function Licenses({user}: IUserFetch) {
	return <BrowserRootPage
		onBack={navigate => navigate("/root/user")}
		title={"root.user.index"}
		menuSelection={["/root/user", "/root/user/[userId]/licenses"]}
		icon={<Avatar src={user.image} size={"large"}/>}
		footer={<UserIndexMenu user={user}/>}
	>
		<Tabs>
			<Tabs.TabPane key={"licenses"} tab={<TabInline icon={<LicenseIcon/>} title={"root.user.license.licenses.tab"}/>}>
				<UserLicenseProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					applyFilter={{
						userId: user.id,
					}}
				>
					<SelectionProvider type={"multi"}>
						<UserLicenseList
							header={() => <RowInline
								extra={<UserLicenseListToolbar/>}
							/>}
						/>
					</SelectionProvider>
				</UserLicenseProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"pending"} tab={<TabInline icon={<QuestionCircleOutlined/>} title={"root.user.license.pending.tab"}/>}>
				<UserLicenseRequestProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					applyFilter={{
						userId: user.id,
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
			</Tabs.TabPane>
			<Tabs.TabPane key={"approved"} tab={<TabInline icon={<CheckCircleOutlined/>} title={"root.user.license.approved.tab"}/>}>
				<UserLicenseRequestProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					applyFilter={{
						userId: user.id,
						status: 1,
					}}
				>
					<SelectionProvider type={"multi"}>
						<LicenseRequestList
							header={() => <RowInline
								extra={<LicenseRequestListToolbar/>}
							/>}
						/>
					</SelectionProvider>
				</UserLicenseRequestProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"declined"} tab={<TabInline icon={<CloseCircleOutlined/>} title={"root.user.license.declined.tab"}/>}>
				<UserLicenseRequestProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					applyFilter={{
						userId: user.id,
						status: 0,
					}}
				>
					<SelectionProvider type={"multi"}>
						<LicenseRequestList
							header={() => <RowInline
								extra={<LicenseRequestListToolbar/>}
							/>}
						/>
					</SelectionProvider>
				</UserLicenseRequestProviderControl>
			</Tabs.TabPane>
		</Tabs>
	</BrowserRootPage>;
});

export const getServerSideProps = UserSource().withFetch("user", "userId");
