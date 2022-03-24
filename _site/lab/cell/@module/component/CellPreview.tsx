import {CellDto} from "@/sdk/puff-smith/voucher/dto";
import {IPreviewProps, Preview, toHumanNumber} from "@leight-core/common";
import {FC} from "react";
import {Ohm} from "@/puff-smith";
import {CellInline} from "./CellInline";
import {Tags} from "@/puff-smith/component/Tags";

export interface ICellPreviewProps extends Partial<IPreviewProps> {
	voucher: CellDto;
}

export const CellPreview: FC<ICellPreviewProps> = ({voucher, ...props}) => {
	return <Preview translation={'lab.voucher.preview'} {...props}>
		{{
			"name": <CellInline voucher={voucher}/>,
			"ohm": <Ohm ohm={voucher.ohm}/>,
			"drain": voucher.drain,
			"type": <Tags tags={[voucher.type]}/>,
			"voltage": toHumanNumber(voucher.voltage, 2),
		}}
	</Preview>
}
