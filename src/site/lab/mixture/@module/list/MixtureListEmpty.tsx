import {BaseIcon} from "@/puff-smith/component/icon/BaseIcon";
import {BoosterIcon} from "@/puff-smith/component/icon/BoosterIcon";
import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {ButtonBar, ButtonLink, ITemplateProps, Template} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface IMixtureListEmptyProps extends Partial<ITemplateProps> {
}

export const MixtureListEmpty: FC<IMixtureListEmptyProps> = props => {
	return <Template
		icon={<MixtureIcon/>}
		label={"lab.mixture.empty"}
		extra={<>
			<Divider/>
			<ButtonBar split={<Divider type={"vertical"}/>}>
				<ButtonLink href={"/to/market/aroma"} label={"market.aroma.menu"} icon={<LiquidIcon/>}/>
				<ButtonLink href={"/to/market/base"} label={"market.base.menu"} icon={<BaseIcon/>}/>
				<ButtonLink href={"/to/market/booster"} label={"market.booster.menu"} icon={<BoosterIcon/>}/>
				<ButtonLink href={"/to/market/mixture"} label={"market.mixture.menu"} icon={<MixtureIcon/>}/>
			</ButtonBar>
		</>}
		{...props}
	/>;
};
