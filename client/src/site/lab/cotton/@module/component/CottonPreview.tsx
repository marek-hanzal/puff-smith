import {CottonDto} from "@/sdk/puff-smith/cotton/dto";
import {IPreviewProps, Preview} from "@leight-core/leight";
import {FC} from "react";
import {CottonInline} from "@/puff-smith/site/lab/cotton/@module/component/CottonInline";

export interface ICottonPreviewProps extends Partial<IPreviewProps> {
	cotton: CottonDto;
}

export const CottonPreview: FC<ICottonPreviewProps> = ({cotton, ...props}) => {
	return <Preview translation={'lab.cotton.preview'} {...props}>
		{{
			"name": <CottonInline cotton={cotton}/>,
			"description": cotton.description,
		}}
	</Preview>
}
