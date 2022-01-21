import {FC} from "react";
import {BuildIcon} from "@/puff-smith";
import {Template} from "@leight-core/leight";
import {ITemplateProps} from "@leight-core/leight/dist";

export interface IAtomizerStepProps extends Partial<ITemplateProps> {
}

export const AtomizerStep: FC<IAtomizerStepProps> = props => {
	return <Template
		icon={<BuildIcon/>}
		label={"lab.wizard.build.atomizer"}
		{...props}
	/>;
};
