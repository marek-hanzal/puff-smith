import {FC} from "react";
import {ButtonBar, IPreviewProps, Preview, BoolInline, PreviewTemplate} from "@leight-core/leight";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {Divider} from "antd";
import {CoilEditButton} from "@/puff-smith/site/lab/coil/@module/component/button/CoilEditButton";
import {WireInline} from "@/puff-smith/site/lab/wire/@module/component/WireInline";
import {Ohm} from "@/puff-smith";

export interface ICoilPreviewProps extends Partial<IPreviewProps> {
	coil: CoilDto;
}

export const CoilPreview: FC<ICoilPreviewProps> = ({coil, ...props}) => {
	return <>
		<PreviewTemplate
			title={coil.wire.name}
			subTitle={coil.wire.vendor.name}
			extra={<>
				<ButtonBar>
					<CoilEditButton coil={coil}/>
				</ButtonBar>
				<Divider/>
			</>}
			span={24}
		/>
		<Preview translation={'lab.coil.preview'} {...props}>
			{{
				wire: <WireInline wire={coil.wire}/>,
				ohm: <Ohm ohm={coil.ohm}/>,
				wraps: coil.wraps,
				size: coil.size,
				spaced: <BoolInline bool={coil.spaced}/>,
			}}
		</Preview>
	</>
}
