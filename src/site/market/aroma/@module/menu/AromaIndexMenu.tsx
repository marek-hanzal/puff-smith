import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {CreateMenuItem, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export interface IAromaIndexMenuProps extends Partial<IMenuProps> {
	aroma: IAroma;
}

export const AromaIndexMenu: FC<IAromaIndexMenuProps> = ({aroma, ...props}) => {
	const query = {aromaId: aroma.id};
	return <Menu
		style={{border: "none"}}
		mode={"horizontal"}
		items={[
			CreateMenuItem("market.aroma.aroma.menu", "/market/aroma/[aromaId]", <LiquidIcon/>, query),
			CreateMenuItem("market.aroma.mixture.menu", "/market/aroma/[aromaId]/mixture", <MixtureIcon/>, query),
		]}
		{...props}
	/>;
};
