import {FC} from "react";
import {BuildIcon} from "@/puff-smith";
import {Template} from "@leight-core/leight";
import {ITemplateProps} from "@leight-core/leight/dist";

export interface IBuildStepProps extends Partial<ITemplateProps> {
}

export const BuildStep: FC<IBuildStepProps> = props => {
	return <Template
		icon={<BuildIcon/>}
		label={"lab.wizard.build.build"}
		{...props}
	/>;
};
