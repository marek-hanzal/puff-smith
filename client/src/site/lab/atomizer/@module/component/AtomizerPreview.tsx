import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {IPreviewProps, Preview} from "@leight-core/leight";
import {FC} from "react";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";

export interface IAtomizerPreviewProps extends Partial<IPreviewProps> {
	atomizer: AtomizerDto
}

export const AtomizerPreview: FC<IAtomizerPreviewProps> = ({atomizer, ...props}) => {
	return <Preview translation={'lab.atomizer.preview'} {...props}>
		{{
			"name": <AtomizerInline atomizer={atomizer}/>,
		}}
	</Preview>
}
