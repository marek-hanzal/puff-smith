import {LinkTo} from "@leight-core/leight";
import {Col, Divider, Row, Space} from "antd";
import {LogoIcon, LogoutButton} from "@/puff-smith";
import {NotificationButton, UserProfileButton} from "@/puff-smith/site/lab/@module/component/button";

export const Header = () => {
	return <Row style={{margin: "0 1em"}}>
		<Col flex={"auto"}>
			<LinkTo href={"/lab"}>
				<LogoIcon style={{width: "10em", display: "inline"}}/>
			</LinkTo>
		</Col>
		<Col span={12}>
			{/*<Moodle*/}
			{/*/>*/}
		</Col>
		<Col flex={"auto"} style={{textAlign: "right"}}>
			<Space size={"middle"} split={<Divider type={"vertical"}/>}>
				<NotificationButton/>
				<UserProfileButton/>
				<LogoutButton/>
			</Space>
		</Col>
	</Row>;
};