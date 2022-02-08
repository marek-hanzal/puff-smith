import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/leight";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {FC} from "react";
import {CoilIcon} from "@/puff-smith";
import {CoilLinkButton, CoilPreview} from "@/puff-smith/site/lab/coil";
import {ExportOutlined} from "@ant-design/icons";

export interface ICoilPreviewButtonProps extends Partial<IDrawerButtonProps> {
	coil: CoilDto;
}

export const CoilPreviewButton: FC<ICoilPreviewButtonProps> = ({coil, ...props}) => {
	return <>
		<DrawerButton
			type={'link'}
			size={'large'}
			icon={<CoilIcon/>}
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
		</DrawerButton>
		<CoilLinkButton
			size={'small'}
			title={null}
			icon={<ExportOutlined/>}
			coil={coil}
		/>
	</>
}
