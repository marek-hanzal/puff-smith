import {PushRight} from "@leight-core/viv";
import {
    Col,
    Divider,
    Row,
    Space
}                  from "antd";
import {
    FC,
    PropsWithChildren,
    ReactNode
}                  from "react";

export type IRowInlineProps = PropsWithChildren<{
	extra?: ReactNode;
}>;

export const RowInline: FC<IRowInlineProps> = ({children, extra}) => {
	return <Row align={"middle"}>
		<Col span={extra ? 12 : 24}>
			<Space split={<Divider type={"vertical"}/>}>
				{children}
			</Space>
		</Col>
		{extra && <Col span={12}>
			<PushRight>
				{extra}
			</PushRight>
		</Col>}
	</Row>;
};
