import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {ButtonLink, IButtonLinkProps} from "@leight-core/client";
import {FC} from "react";

export interface IAromaCreateButtonProps extends Partial<IButtonLinkProps> {
}

export const AromaCreateButton: FC<IAromaCreateButtonProps> = props => {
	return <ButtonLink
		type={"primary"}
		size={"large"}
		icon={<AromaIcon/>}
		href={"/market/aroma/create"}
		label={"market.aroma.create.button"}
		{...props}
	/>;
};
