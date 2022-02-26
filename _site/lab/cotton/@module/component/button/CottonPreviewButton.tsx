import {DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {CottonDto} from "@/sdk/puff-smith/cotton/dto";
import {FC} from "react";
import {CottonIcon} from "@/puff-smith";
import {ExportOutlined} from "@ant-design/icons";
import {CottonPreview} from "../CottonPreview";
import {CottonLinkButton} from "./CottonLinkButton";

export interface ICottonPreviewButtonProps extends Partial<IDrawerButtonProps> {
	cotton: CottonDto;
}

export const CottonPreviewButton: FC<ICottonPreviewButtonProps> = ({cotton, ...props}) => {
	return <>
		<DrawerButton
			type={'link'}
			size={'large'}
			icon={<CottonIcon/>}
			title={'lab.cotton.preview'}
			{...props}
		>
			<CottonPreview cotton={cotton}/>
		</DrawerButton>
		<CottonLinkButton
			size={'small'}
			title={null}
			cotton={cotton}
			icon={<ExportOutlined/>}
		/>
	</>
}
