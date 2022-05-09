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
				<ButtonLink size={"large"} type={"link"} href={"/to/market/aroma"} title={"market.aroma.menu"} icon={<LiquidIcon/>}/>
				<ButtonLink size={"large"} type={"link"} href={"/to/market/base"} title={"market.base.menu"} icon={<BaseIcon/>}/>
				<ButtonLink size={"large"} type={"link"} href={"/to/market/booster"} title={"market.booster.menu"} icon={<BoosterIcon/>}/>
				<ButtonLink size={"large"} type={"link"} href={"/to/market/mixture"} title={"market.mixture.menu"} icon={<MixtureIcon/>}/>
			</ButtonBar>
		</>}
		{...props}
	/>;
};
