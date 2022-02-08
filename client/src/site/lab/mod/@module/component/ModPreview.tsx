import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {IPreviewProps, Preview} from "@leight-core/leight";
import {FC} from "react";
import {ModInline} from "@/puff-smith/site/lab/mod";
import {PreviewTemplate} from "@leight-core/leight/dist";

export interface IModPreviewProps extends Partial<IPreviewProps> {
	mod: ModDto
}

export const ModPreview: FC<IModPreviewProps> = ({mod, ...props}) => {
	return <>
		<PreviewTemplate
			label={'lab.mod.preview'}
			title={mod.name}
			subTitle={mod.vendor.name}
			span={24}
		/>
		<Preview translation={'lab.mod.preview'} {...props}>
			{{
				"name": <ModInline mod={mod}/>,
			}}
		</Preview>
	</>
}
