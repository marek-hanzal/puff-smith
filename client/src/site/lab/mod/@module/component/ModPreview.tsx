import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {IPreviewProps, Preview} from "@leight-core/leight";
import {FC} from "react";
import {ModInline} from "@/puff-smith/site/lab/mod";

export interface IModPreviewProps extends Partial<IPreviewProps> {
	mod: ModDto
}

export const ModPreview: FC<IModPreviewProps> = ({mod, ...props}) => {
	return <Preview translation={'lab.mod.preview'} {...props}>
		{{
			"name": <ModInline mod={mod}/>,
		}}
	</Preview>
}
