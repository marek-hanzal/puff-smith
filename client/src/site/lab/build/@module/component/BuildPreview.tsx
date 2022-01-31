import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {Preview, PreviewBool, toLocalDateTime} from "@leight-core/leight";
import {FC} from "react";
import {Slider} from "antd";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {CoilInline} from "@/puff-smith/site/lab/coil";
import {CottonInline} from "@/puff-smith/site/lab/cotton";
import {IPreviewProps} from "@leight-core/leight/dist";

export interface IBuildPreviewProps extends Partial<IPreviewProps> {
	build: BuildDto
}

export const BuildPreview: FC<IBuildPreviewProps> = ({build, ...props}) => {
	return <Preview translation={'lab.build.preview'} {...props}>
		{{
			"created": toLocalDateTime(build.created),
			"active": <PreviewBool bool={build.active}/>,
			"atomizer": <AtomizerInline atomizer={build.atomizer}/>,
			"coil": <CoilInline coil={build.coil}/>,
			"cotton": <CottonInline cotton={build.cotton}/>,
			"ohm": build.ohm.toFixed(2) + " ohm",
			"coilOffset": <Slider
				included={false}
				tipFormatter={null}
				marks={{
					"-2": -2,
					"-1": -1,
					"0": 0,
					"1": 1,
					"2": 2,
				}}
				value={build.coilOffset}
				min={-2}
				max={2}
			/>,
			"cottonOffset": <Slider
				included={false}
				tipFormatter={null}
				marks={{
					"-2": -2,
					"-1": -1,
					"0": 0,
					"1": 1,
					"2": 2,
				}}
				value={build.cottonOffset}
				min={-2}
				max={2}
			/>,
			"coils": <Slider
				included={false}
				tipFormatter={null}
				marks={{
					1: 1,
					2: 2,
					3: 3,
					4: 4,
				}}
				min={1}
				max={4}
				value={build.coils}
			/>
		}}
	</Preview>
}
