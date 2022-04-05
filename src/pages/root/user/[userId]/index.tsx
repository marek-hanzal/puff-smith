import {IUserFetchProps, UserService} from "@/puff-smith/service/user";
import {RootPage, withRootLayout} from "@/puff-smith/site/root";
import {UserContextMenu} from "@/puff-smith/site/root/user";
import {Preview} from "@leight-core/client";
import {Avatar, Col, Row} from "antd";

export default withRootLayout(function Index({user}: IUserFetchProps) {
	return <RootPage
		title={"root.user.index"}
		menuSelection={["/root/user", "/root/user/[userId]"]}
		icon={<Avatar src={user.image} size={"large"}/>}
		headerPostfix={<UserContextMenu user={user}/>}
	>
		<Row gutter={16}>
			<Col span={12}>
				<Preview translation={"root.user.preview"}>
					{{
						"name": user.name,
						"email": user.email,
					}}
				</Preview>
			</Col>
		</Row>
	</RootPage>;
});

export const getServerSideProps = UserService().pageFetch("user", "userId");
