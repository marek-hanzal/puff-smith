import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/common";
import {WireDto} from "@/sdk/puff-smith/wire/dto";
import {FC} from "react";
import {WireIcon} from "@/puff-smith";
import {ExportOutlined} from "@ant-design/icons";
import {WirePreview} from "../WirePreview";
import {WireLinkButton} from "./WireLinkButton";

export interface IWirePreviewButtonProps extends Partial<IDrawerButtonProps> {
	wire: WireDto;
}

export const WirePreviewButton: FC<IWirePreviewButtonProps> = ({wire, ...props}) => {
	return <>
		<DrawerButton
			type={'link'}
			size={'large'}
			icon={<WireIcon/>}
			title={'lab.wire.preview'}
			{...props}
		>
			<PreviewTemplate
				icon={<WireIcon/>}
				label={'lab.wire.preview'}
				title={wire.name}
				subTitle={wire.vendor.name}
				span={24}
			>
				<WirePreview wire={wire}/>
			</PreviewTemplate>
		</DrawerButton>
		<WireLinkButton
			size={'small'}
			title={null}
			wire={wire}
			icon={<ExportOutlined/>}
		/>
	</>
}
