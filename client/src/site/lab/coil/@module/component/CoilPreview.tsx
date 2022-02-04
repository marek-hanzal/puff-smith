import {FC} from "react";
import {IPreviewProps, Preview} from "@leight-core/leight";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {WireInline} from "@/puff-smith/site/lab/wire";

export interface ICoilPreviewProps extends Partial<IPreviewProps> {
	coil: CoilDto;
}

export const CoilPreview: FC<ICoilPreviewProps> = ({coil, ...props}) => {
	return <Preview translation={'lab.coil.preview'} {...props}>
		{{
			wire: <WireInline wire={coil.wire}/>,
			wraps: coil.wraps,
			size: coil.size,
			ohm: coil.ohm.toFixed(2) + 'ohm',
		}}
	</Preview>
}
