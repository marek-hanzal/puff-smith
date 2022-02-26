import {ButtonLink, IButtonLinkProps} from "@leight-core/common";
import {FC} from "react";
import {WireDto} from "@/sdk/puff-smith/wire/dto";
import {WireIcon} from "@/puff-smith";

export interface IWireLinkButtonProps extends Partial<IButtonLinkProps> {
	wire: WireDto;
}

export const WireLinkButton: FC<IWireLinkButtonProps> = ({wire, ...props}) => {
	return <ButtonLink
		size={'large'}
		type={'link'}
		href={'/lab/wire/[wireId]'}
		query={{wireId: wire.id}}
		icon={<WireIcon/>}
		title={'lab.wire.button.index'}
		{...props}
	/>;
}
