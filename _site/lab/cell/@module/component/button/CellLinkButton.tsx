import {ButtonLink, IButtonLinkProps} from "@leight-core/common";
import {FC} from "react";
import {CellDto} from "@/sdk/puff-smith/voucher/dto";
import {CellIcon} from "@/puff-smith";

export interface ICellLinkButtonProps extends Partial<IButtonLinkProps> {
	voucher: CellDto;
}

export const CellLinkButton: FC<ICellLinkButtonProps> = ({voucher, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/voucher/[voucherId]'}
		query={{voucherId: voucher.id}}
		icon={<CellIcon/>}
		title={'lab.voucher.button.index'}
		{...props}
	/>;
}
