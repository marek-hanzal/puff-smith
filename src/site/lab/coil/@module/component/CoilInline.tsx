import {FC} from "react";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {Divider, Space} from "antd";
import {CoilWraps} from "@/puff-smith/component/inline/CoilWraps";
import {CoilSize} from "@/puff-smith/component/inline/CoilSize";
import {WireInline} from "@/puff-smith/site/lab/wire/@module/component/WireInline";

export interface ICoilInlineProps {
	coil: CoilDto;
}

export const CoilInline: FC<ICoilInlineProps> = ({coil}) => {
	return <Space size={0} split={<Divider type={'vertical'}/>}>
		<WireInline wire={coil.wire}/>
		<CoilWraps wraps={coil.wraps}/>
		<CoilSize size={coil.size}/>
	</Space>
}
