import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {Preview, toLocalDate} from "@leight-core/leight";
import {FC} from "react";
import {Slider, Space} from "antd";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {CoilInline} from "@/puff-smith/site/lab/coil";
import {CottonInline} from "@/puff-smith/site/lab/cotton";
import dayjs from "dayjs";

export interface IBuildPreviewProps {
	build: BuildDto
}

export const BuildPreview: FC<IBuildPreviewProps> = ({build}) => {
	return <Preview translation={'lab.build.preview'}>
		{{
			"name": <Space>
				<span>{build.name}</span>
			</Space>,
			"description": <pre>
				{build.description}
			</pre>,
			"created": toLocalDate(dayjs.unix(build.created)),
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
