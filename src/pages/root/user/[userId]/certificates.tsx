import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {IUserFetch} from "@/puff-smith/service/user/interface";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {BrowserRootPage} from "@/puff-smith/site/root/@module/component/BrowserRootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {UserIndexMenu} from "@/puff-smith/site/root/user/@module/menu/UserIndexMenu";
import {UserCertificateList} from "@/puff-smith/site/shared/user/certificate/@module/list/UserCertificateList";
import {UserCertificateListToolbar} from "@/puff-smith/site/shared/user/certificate/@module/list/UserCertificateListToolbar";
import {CertificateApproveButton} from "@/puff-smith/site/shared/user/certificate/request/@module/button/CertificateApproveButton";
import {CertificateDeclineButton} from "@/puff-smith/site/shared/user/certificate/request/@module/button/CertificateDeclineButton";
import {CertificateRequestList} from "@/puff-smith/site/shared/user/certificate/request/@module/list/CertificateRequestList";
import {CertificateRequestListToolbar} from "@/puff-smith/site/shared/user/certificate/request/@module/list/CertificateRequestListToolbar";
import {UserCertificateProviderControl} from "@/sdk/api/user/certificate/query";
import {UserCertificateRequestProviderControl} from "@/sdk/api/user/certificate/request/query";
import {CheckCircleOutlined, CloseCircleOutlined, QuestionCircleOutlined} from "@ant-design/icons";
import {ButtonBar, SelectionProvider, TabInline} from "@leight-core/client";
import {Avatar, Tabs} from "antd";

export default withRootLayout(function Certificates({user}: IUserFetch) {
	return <BrowserRootPage
		onBack={navigate => navigate("/root/user")}
		title={"root.user.index"}
		menuSelection={["/root/user", "/root/user/[userId]/certificates"]}
		icon={<Avatar src={user.image} size={"large"}/>}
		footer={<UserIndexMenu user={user}/>}
	>
		<Tabs>
			<Tabs.TabPane key={"certificates"} tab={<TabInline icon={<CertificateIcon/>} title={"root.user.certificate.certificates.tab"}/>}>
				<UserCertificateProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					applyFilter={{
						userId: user.id,
					}}
				>
					<SelectionProvider type={"multi"}>
						<UserCertificateList
							header={() => <RowInline
								extra={<UserCertificateListToolbar/>}
							/>}
						/>
					</SelectionProvider>
				</UserCertificateProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"pending"} tab={<TabInline icon={<QuestionCircleOutlined/>} title={"root.user.certificate.pending.tab"}/>}>
				<UserCertificateRequestProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					applyFilter={{
						userId: user.id,
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
			</Tabs.TabPane>
			<Tabs.TabPane key={"approved"} tab={<TabInline icon={<CheckCircleOutlined/>} title={"root.user.certificate.approved.tab"}/>}>
				<UserCertificateRequestProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					applyFilter={{
						userId: user.id,
						status: 1,
					}}
				>
					<SelectionProvider type={"multi"}>
						<CertificateRequestList
							header={() => <RowInline
								extra={<CertificateRequestListToolbar/>}
							/>}
						/>
					</SelectionProvider>
				</UserCertificateRequestProviderControl>
			</Tabs.TabPane>
			<Tabs.TabPane key={"declined"} tab={<TabInline icon={<CloseCircleOutlined/>} title={"root.user.certificate.declined.tab"}/>}>
				<UserCertificateRequestProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					applyFilter={{
						userId: user.id,
						status: 0,
					}}
				>
					<SelectionProvider type={"multi"}>
						<CertificateRequestList
							header={() => <RowInline
								extra={<CertificateRequestListToolbar/>}
							/>}
						/>
					</SelectionProvider>
				</UserCertificateRequestProviderControl>
			</Tabs.TabPane>
		</Tabs>
	</BrowserRootPage>;
});

export const getServerSideProps = UserSource().withFetch("user", "userId");
