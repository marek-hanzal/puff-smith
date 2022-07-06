import {CodeInline} from "@/puff-smith/component/inline/CodeInline";
import {RangeInline} from "@/puff-smith/component/inline/RangeInline";
import {Tags} from "@/puff-smith/component/Tags";
import {IAtomizer} from "@/puff-smith/service/atomizer/interface";
import {AtomizerNameInline} from "@/puff-smith/site/shared/atomizer/@module/inline/AtomizerNameInline";
import {BoolInline, Preview} from "@leight-core/client";
import {FC} from "react";

export interface IAtomizerViewProps {
	atomizer: IAtomizer;
}

export const AtomizerView: FC<IAtomizerViewProps> = ({atomizer}) => {
	return <Preview
		name={"atomizer"}
		translation={"shared.atomizer.view"}
	>
		{[
			{
				name: "info",
				items: {
					name: <AtomizerNameInline atomizer={atomizer}/>,
					code: <CodeInline code={atomizer}/>,
					squonk: <BoolInline bool={atomizer.squonk}/>,
					isHybrid: <BoolInline bool={atomizer.isHybrid}/>,
				},
			},
			{
				name: "more",
				items: {
					draws: <Tags tags={atomizer.draws} translation={"common.draw"}/>,
					coilSize: <RangeInline from={atomizer.coilMin} to={atomizer.coilMax}/>,
					wraps: <RangeInline from={atomizer.wrapsMin} to={atomizer.wrapsMax}/>,
				},
			},
		]}
	</Preview>;
};
