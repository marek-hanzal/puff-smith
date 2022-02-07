import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/leight";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {FC} from "react";
import {EyeOutlined} from "@ant-design/icons";
import {CoilIcon} from "@/puff-smith";
import {CoilPreview} from "@/puff-smith/site/lab/coil";

export interface ICoilPreviewButtonProps extends Partial<IDrawerButtonProps> {
	coil: CoilDto;
}

export const CoilPreviewButton: FC<ICoilPreviewButtonProps> = ({coil, ...props}) => {
	return <DrawerButton
		type={'link'}
		size={'large'}
		icon={<EyeOutlined/>}
		title={'lab.coil.preview'}
		{...props}
	>
		<PreviewTemplate
			icon={<CoilIcon/>}
			title={coil.wire.name}
			subTitle={coil.wire.vendor.name}
			span={24}
		>
			<CoilPreview coil={coil}/>
		</PreviewTemplate>
	</DrawerButton>;
}
