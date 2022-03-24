import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/common";
import {CellDto} from "@/sdk/puff-smith/voucher/dto";
import {FC} from "react";
import {CellIcon} from "@/puff-smith";
import {CellPreview} from "../CellPreview";
import {CellLinkButton} from "./CellLinkButton";

export interface ICellPreviewButtonProps extends Partial<IDrawerButtonProps> {
	voucher: CellDto;
}

export const CellPreviewButton: FC<ICellPreviewButtonProps> = ({voucher, ...props}) => {
	return <>
		<DrawerButton
			type={'link'}
			size={'large'}
			icon={<CellIcon/>}
			title={'lab.voucher.preview'}
			{...props}
		>
			<PreviewTemplate
				icon={<CellIcon/>}
				label={'lab.voucher.preview'}
				title={voucher.name}
				subTitle={voucher.vendor.name}
				span={24}
			>
				<CellPreview voucher={voucher}/>
			</PreviewTemplate>
		</DrawerButton>
		<CellLinkButton title={null} voucher={voucher}/>
	</>
}
