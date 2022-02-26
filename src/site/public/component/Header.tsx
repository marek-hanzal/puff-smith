import {LogoIcon} from "@/puff-smith";
import {LinkTo} from "@leight-core/common";
import {Col, Divider, Row, Space} from "antd";

export const Header = () => {
	return <Row style={{margin: "0 1em"}}>
		<Col flex={"auto"}>
			<LinkTo href={"/public"}>
				<LogoIcon style={{width: "7.5em", display: "inline"}}/>
			</LinkTo>
		</Col>
		<Col span={12}>
		</Col>
		<Col flex={"auto"} style={{textAlign: "right"}}>
			<Space size={"middle"} split={<Divider type={"vertical"}/>}/>
		</Col>
	</Row>;
};
