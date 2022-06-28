import {Tags} from "@/puff-smith/component/Tags";
import {IUserFetch} from "@/puff-smith/service/user/interface";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {RootPage} from "@/puff-smith/site/root/@module/component/RootPage";
import {withRootLayout} from "@/puff-smith/site/root/@module/layout/layout";
import {UserIndexMenu} from "@/puff-smith/site/root/user/@module/menu/UserIndexMenu";
import {Preview} from "@leight-core/client";
import {Avatar, Col, Row} from "antd";

export default withRootLayout(function Index({user}: IUserFetch) {
	return <RootPage
		onBack={navigate => navigate("/root/user")}
		title={"root.user.index"}
		menuSelection={["/root/user", "/root/user/[userId]"]}
		icon={<Avatar src={user.image} size={"large"}/>}
		footer={<UserIndexMenu user={user}/>}
	>
		<Row gutter={16}>
			<Col span={12}>
				<Preview translation={"root.user.preview"}>
					{{
						"name": user.name,
						"email": user.email,
						"tokens": <Tags
							color={"red"}
							translation={"common.token"}
							tags={user.tokens.map(token => ({
								id: token.id,
								group: "token",
								code: token.name,
							}))}
						/>,
					}}
				</Preview>
			</Col>
		</Row>
	</RootPage>;
});

export const getServerSideProps = UserSource().withFetch("user", "userId");
