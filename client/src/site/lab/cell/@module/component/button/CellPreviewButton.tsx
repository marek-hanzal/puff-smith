import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/leight";
import {CellDto} from "@/sdk/puff-smith/cell/dto";
import {FC} from "react";
import {CellIcon} from "@/puff-smith";
import {CellLinkButton, CellPreview} from "@/puff-smith/site/lab/cell";

export interface ICellPreviewButtonProps extends Partial<IDrawerButtonProps> {
	cell: CellDto;
}

export const CellPreviewButton: FC<ICellPreviewButtonProps> = ({cell, ...props}) => {
	return <>
		<DrawerButton
			type={'link'}
			size={'large'}
			icon={<CellIcon/>}
			title={'lab.cell.preview'}
			{...props}
		>
			<PreviewTemplate
				icon={<CellIcon/>}
				label={'lab.cell.preview'}
				title={cell.name}
				subTitle={cell.vendor.name}
				span={24}
			>
				<CellPreview cell={cell}/>
			</PreviewTemplate>
		</DrawerButton>
		<CellLinkButton title={null} cell={cell}/>
	</>
}
