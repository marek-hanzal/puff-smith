import {FC} from "react";
import {BuildIcon} from "@/puff-smith";
import {Template} from "@leight-core/leight";
import {ITemplateProps} from "@leight-core/leight/dist";

export interface ICottonStepProps extends Partial<ITemplateProps> {
}

export const CottonStep: FC<ICottonStepProps> = props => {
	return <Template
		icon={<BuildIcon/>}
		label={"lab.wizard.build.cotton"}
		{...props}
	/>;
};
