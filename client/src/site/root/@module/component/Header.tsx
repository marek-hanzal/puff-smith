import {LogoIcon, LogoutButton} from "@/puff-smith";
import {LinkTo} from "@leight-core/leight";
import {Col, Divider, Row, Space} from "antd";

export const Header = () => {
	return <Row style={{margin: "0 1em"}}>
		<Col flex={"auto"}>
			<LinkTo href={"/root"}>
				<LogoIcon style={{width: "10em", display: "inline"}}/>
			</LinkTo>
		</Col>
		<Col span={12}>
		</Col>
		<Col flex={"auto"} style={{textAlign: "right"}}>
			<Space size={"middle"} split={<Divider type={"vertical"}/>}>
				<LogoutButton/>
			</Space>
		</Col>
	</Row>;
};