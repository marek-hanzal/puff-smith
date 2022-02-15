import {WireDto} from "@/sdk/puff-smith/wire/dto";
import {IPreviewProps, Preview} from "@leight-core/leight";
import {FC} from "react";
import {WireInline} from "@/puff-smith/site/lab/wire/@module/component/WireInline";
import {Tags} from "@/puff-smith/component/Tags";

export interface IWirePreviewProps extends Partial<IPreviewProps> {
	wire: WireDto;
}

export const WirePreview: FC<IWirePreviewProps> = ({wire, ...props}) => {
	return <Preview translation={'lab.wire.preview'} {...props}>
		{{
			"name": <WireInline wire={wire}/>,
			"description": wire.description,
			"draws": <Tags tags={wire.draws}/>,
		}}
	</Preview>
}
