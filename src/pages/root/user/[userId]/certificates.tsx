import {DEFAULT_LIST_SIZE} from "@/puff-smith/component/misc";
import {RowInline} from "@/puff-smith/component/RowInline";
import {IUserFetch} from "@/puff-smith/service/user/interface";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {RootPage} from "@/puff-smith/site/root/@module/component/RootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {UserIndexMenu} from "@/puff-smith/site/root/user/@module/menu/UserIndexMenu";
import {CertificateApproveButton} from "@/puff-smith/site/shared/user/certificate/request/@module/button/CertificateApproveButton";
import {CertificateDeclineButton} from "@/puff-smith/site/shared/user/certificate/request/@module/button/CertificateDeclineButton";
import {CertificateRequestList} from "@/puff-smith/site/shared/user/certificate/request/@module/list/CertificateRequestList";
import {CertificateRequestListToolbar} from "@/puff-smith/site/shared/user/certificate/request/@module/list/CertificateRequestListToolbar";
import {UserCertificateRequestProviderControl} from "@/sdk/api/user/certificate/request/query";
import {CheckCircleOutlined, QuestionCircleOutlined} from "@ant-design/icons";
import {ButtonBar, SelectionProvider, TabInline} from "@leight-core/client";
import {Avatar, Tabs} from "antd";

export default withRootLayout(function Certificates({user}: IUserFetch) {
	return <RootPage
		title={"root.user.index"}
		menuSelection={["/root/user", "/root/user/[userId]/certificates"]}
		icon={<Avatar src={user.image} size={"large"}/>}
		headerProps={{
			footer: <UserIndexMenu user={user}/>,
		}}
	>
		<Tabs>
			<Tabs.TabPane key={"pending"} tab={<TabInline icon={<QuestionCircleOutlined/>} title={"root.user.certificate.pending.tab"}/>}>
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
			</Tabs.TabPane>
			<Tabs.TabPane key={"approved"} tab={<TabInline icon={<CheckCircleOutlined/>} title={"root.user.certificate.approved.tab"}/>}>
				<UserCertificateRequestProviderControl
					defaultSize={DEFAULT_LIST_SIZE}
					applyFilter={{
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
		</Tabs>
	</RootPage>;
});

export const getServerSideProps = UserSource().withFetch("user", "userId");
