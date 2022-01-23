import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {Preview} from "@leight-core/leight/dist";
import {FC} from "react";
import {Space} from "antd";

export interface IBuildPreviewProps {
	build: BuildDto
}

export const BuildPreview: FC<IBuildPreviewProps> = ({build}) => {
	return <Preview translation={'lab.build.preview'}>
		{{
			"name": <Space>
				<span>{build.name}</span>
			</Space>,
		}}
	</Preview>
}
