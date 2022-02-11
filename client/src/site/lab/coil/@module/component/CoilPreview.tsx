import {FC} from "react";
import {IPreviewProps, Preview} from "@leight-core/leight";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {WireInline} from "@/puff-smith/site/lab/wire";
import {CoilEditButton} from "@/puff-smith/site/lab/coil";
import {Divider} from "antd";
import {ButtonBar, PreviewBool, PreviewTemplate} from "@leight-core/leight/dist";

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
				wraps: coil.wraps,
				size: coil.size,
				spaced: <PreviewBool bool={coil.spaced}/>,
			}}
		</Preview>
	</>
}
