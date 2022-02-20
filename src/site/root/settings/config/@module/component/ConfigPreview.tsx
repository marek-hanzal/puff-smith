import {ConfigDto} from "@/sdk/edde/config/dto";
import {IPreviewProps, Preview} from "@leight-core/leight";
import {FC} from "react";

export interface IConfigPreviewProps extends Partial<IPreviewProps> {
	config: ConfigDto;
}

export const ConfigPreview: FC<IConfigPreviewProps> = ({config, ...props}) => {
	return <Preview
		translation={"root.config.info"}
		{...props}
	>
		{{
			"key": config.key,
			"value": config.value,
		}}
	</Preview>;
};
