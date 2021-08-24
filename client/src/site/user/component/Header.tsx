import {LogoIcon, LogoutButton} from "@/ps";
import {NotificationButton, UserProfileButton} from "@/ps/site/user";
import {LinkTo} from "@leight-core/leight";
import {Col, Divider, Row, Space} from "antd";

export const Header = () => {
	return <Row style={{margin: "0 1em"}}>
		<Col flex={"auto"}>
			<LinkTo href={"/user"}>
				<LogoIcon style={{height: "3em", display: "inline"}}/>
			</LinkTo>
		</Col>
		<Col span={12}>
		</Col>
		<Col flex={"auto"} style={{textAlign: "right"}}>
			<Space size={"small"} split={<Divider type={"vertical"}/>}>
				<NotificationButton/>
				<UserProfileButton/>
				<LogoutButton/>
			</Space>
		</Col>
	</Row>;
};
